import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect} from 'react'
import {KeyboardAvoidingViewBase, View,ActivityIndicator, StyleSheet,Dimensions,SafeAreaView} from 'react-native';
import { NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Button, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Directions, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-navigation';
import PostCards from '../../Components/Cards';
import JobCard from '../../Components/JobCard';
import { useAuth } from '../../firebase/AuthProvider';
import { getUserPost } from '../../firebase/PostProvider';
import { getUserbyEmail } from '../../firebase/UserProvider';
import { getUserJob } from '../../firebase/JobProvider';
import SearchProfileHeader from '../../Components/Headers/SearchProfileHeader';




// const theme = useTheme();
// const styles = useStyles(theme);

const SearchProfile =  ({ navigation, route }) => {

const {email} = route.params;
console.log(email); 
  //const {currentUser} = useAuth();
  const [user, setUsers] = useState([]);
  const [loadinguUsers, setLoadinguUsers] = useState(false);
  const [userPost , setUserPost] = useState([]);
  const [loadingJob, setLoadingJob] = useState(null);
  const [userJobs, setUserJobs] = useState([]);
  const [loadingPost, setLoadingPost] = useState(null);
  const [Post ,setPost] = useState(null);
  const [Job ,setJob] = useState(false);
  
  useEffect(() => {
    navigation.setOptions({
        headerShown: true,
        header : () => (<SearchProfileHeader props = {email}/>)
        
    });
    //loadinguUser();
    loadingPosts();
    loadingJobs();
    loadinguUser();
    //console.log(currentUser.email);
},[])

const loadinguUser = async () => {
  try {
      setLoadinguUsers(true);
      const users = await getUserbyEmail(email);
      setUsers(users)
      //console.log(user)
  } catch (err) {
     console.log(err)
  } finally {
      setLoadinguUsers(false);
  }
};

const loadingPosts = async () =>{
try{
  setLoadingPost(true);
  const post = await getUserPost(email);
  setUserPost(post)
  //console.log(post)
 } catch (err) {
  console.log(err)
} finally {
  setLoadingPost(false);
}
}

const loadingJobs= async () =>{
    try{
      setLoadingJob(true);
      const job = await getUserJob(email);
      setUserJobs(job)
      //console.log(job)
     } catch (err) {
      console.log(err)
    } finally {
      setLoadingJob(false);
    }
    }

return (
  // Post === true ? setJob(false) : setPost(true)
  // Job === false ? setJob(true) : setPost(false)

  <View style={styles.container}>
    <View style={styles.subContainer}>
        <View style={{flexDirection:'row'}}>
          <Button
          title="Post's"
          iconContainerStyle = {styles.PiconContainerStyle}
          titleStyle = {Post ? styles.PtitleStyle : styles.PtitleStyleJ}
          buttonStyle = {Post ? styles.PuttonStyleJ : styles.PuttonStyle}
          containerStyle = {styles.PcontainerStyle}
          onPress={() => {if(Post){
            setPost(false)
            setJob(false)
            console.log(Post);
          }}}
          />
          <Button
          title="Jobs"
          iconContainerStyle = {styles.PiconContainerStyle}
          titleStyle = {Job ? styles.PtitleStyleJ : styles.PtitleStyle}
          buttonStyle = {Job ? styles.PuttonStyle : styles.PuttonStyleJ}  
          containerStyle = {styles.PcontainerStyle}
          onPress={() => {if(!Job){
            setPost(true)
            setJob(true)
          }}}
          />
      </View>
      < View style = {{flex : 1, marginTop : 7}}>
      { !Job && userPost == 0 &&
      <View>
        <Text style = {{marginTop : 70}}>   User has no Post or Jobs</Text>
        <Button
          title="No Post Availabe"
          iconContainerStyle = {styles.PiconContainerStyle}
          titleStyle = {styles.PtitleStyle}
          buttonStyle = {styles.PuttonStyleJ}  
          containerStyle = {styles.PcontainerStyle}
          onPress={() => {
            //setLoadingFollowers(true)
          }}
          />
      </View>
      }
        {Job && Post &&  userJobs == 0 &&
      <View>
        <Text style = {{marginTop : 70}}>   User has no Post or Jobs</Text>
        <Button
          title="No Job Posts Availabe"
          iconContainerStyle = {styles.PiconContainerStyle}
          titleStyle = {styles.PtitleStyle}
          buttonStyle = {styles.PuttonStyleJ}  
          containerStyle = {styles.PcontainerStyle}
          onPress={() => {
            //setLoadingFollowers(true)
          }}
          />
      </View>
      }
        { !Job &&
        <FlatList
        data = {userPost}
         keyExtractor={item => item.id}
         //numColumns={1}
         horizontal = {false}
         //extraData =  {selected}
         renderItem = {({item , index}) => {
              //console.log(item);
              return (
                <PostCards props = {item}/>
              )}}
          >
      </FlatList>
        }
        {
            Job && Post && 
            <FlatList
            data = {userJobs}
             keyExtractor={item => item.id}
             //numColumns={1}
             horizontal = {false}
             //extraData =  {selected}
             renderItem = {({item , index}) => {
                  //console.log(item);
                  return (
                    <JobCard props = {item}/>
                  )}}
              >
          </FlatList>
        }
      </View>
    </View> 
  </View>
);
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle:{
      fontSize: 16,
      color:'black', 
      //marginTop : 5
  
    },
    subContainer:{
      flex : 1,
      alignItems: 'center',
      //justifyContent: 'center',
      marginTop : 5,
      //marginBottom : 6,
      //backgroundColor : 'black'
      //borderWidth:1, 
      //borderColor: "black"
    },
    PiconContainerStyle:{ 
      //marginRight: 10,
      marginTop : 5
  },
  PtitleStyle:{ 
      fontWeight: '600',
      alignItems : 'center',
      marginRight : 10,
      color: '#233975',
      //fontFamily: "Montserrat",
  },
  PtitleStyleJ:{ 
    fontWeight: '600',
    alignItems : 'center',
    marginRight : 10,
    color: '#FFFFFF',
    //fontFamily: "Montserrat",
  },
  PuttonStyle:{
       backgroundColor: '#233975',
       borderColor: 'transparent',
       borderWidth: 1,
       //borderRadius: 100
  },
  PuttonStyleJ:{
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderWidth: 1,
    //borderRadius: 100
  },
  PcontainerStyle:{
      //marginTop : 20,
      //marginBottom : 20,
       width: 200,
       ///marginHorizontal: 50,
       //marginVertical: 10,
       //marginLeft: 20,
       //marginTop : 30
  },
  });
  

export default SearchProfile;