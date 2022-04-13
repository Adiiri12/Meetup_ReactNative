import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect,useRef} from 'react'
import {KeyboardAvoidingViewBase, View,ActivityIndicator, StyleSheet,Dimensions,SafeAreaView,RefreshControl} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { Button, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Directions, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-navigation';
import PostCards from '../../Components/Cards';
import JobCard from '../../Components/JobCard';
import { useAuth } from '../../firebase/AuthProvider';
import { firestore } from '../../firebase/firebase';
import { getUserPost } from '../../firebase/PostProvider';
import { getUserbyEmail } from '../../firebase/UserProvider';
import { GetFollowers } from '../../firebase/FollowingProvider';
import { Card } from 'react-native-elements/dist/card/Card';
import AllPostCard from '../../Components/AllPostCard';
import AllJobsCard from '../../Components/AllJobsCard';
import { useIsFocused } from "@react-navigation/native";
import { NavigationTabs } from '../../Common/NavigationTabs/navigation';
// const theme = useTheme();
// const styles = useStyles(theme);

const HomePage =  ({ navigation }) => {

  const {currentUser} = useAuth();
  const navigations = useNavigation();
  const [user, setUsers] = useState([]);
  const [loadinguUsers, setLoadinguUsers] = useState(false);
  const [userPost , setUserPost] = useState([]);
  const [loadingPost, setLoadingPost] = useState(null);
  const [loadingJob, setLoadingJob] = useState(null);
  const [userJobs, setUserJobs] = useState([]);
  const [Post ,setPost] = useState(null);
  const [Job ,setJob] = useState(false);
  const [followers, setFollowers] = useState([])
  const [loadingFollowers, setLoadingFollowers] = useState(null);
  const [check, setCheck] = useState(false);
  const isVisible = useIsFocused();

    
  useEffect(() => {

  if(isVisible){
  loadFollowers();
  }
  loadFollowers();
  
  

},[isVisible]);

  



const loadFollowers = async () =>{
  try{
    setLoadingFollowers(true);
    const follow = await GetFollowers(currentUser.email)
    setFollowers(follow);
    //console.log(followers);
    if(followers.length != 0){
      loadingPosts();
      loadingJobs();
    }

  }catch(err){
    console.log(err)
  }
  finally{
    setLoadingFollowers(false);

  }

}


const loadingPosts =  async () =>{
try{
  let array = []
  setLoadingPost(true);
   for(let i = 0; i < followers.length; i++){
    const post = await firestore.collection('Post').doc(followers[i].id)
    .collection('userPost').orderBy('createdAt','asc').get().then((snapshot) =>{
    
        snapshot.forEach((doc) =>{
            array.push({
                key: doc.id,
                Post: doc.data()
            })
        })
    })
    setUserPost(array)
    //console.log(userPost)
   }
 } catch (err) {
  console.log(err)
} finally {
  setLoadingPost(false);
}
}


const loadingJobs =  async () =>{
  try{
    //setUserPost([]);
    let array = []
    setLoadingJob(true);
     for(let i = 0; i < followers.length; i++){
      const post = await firestore.collection('Job').doc(followers[i].id)
      .collection('userPost').orderBy('createdAt','asc').get().then((snapshot) =>{
      
          snapshot.forEach((doc) =>{
              array.push({
                  key: doc.id,
                  Job: doc.data()
              })
              //console.log(array)
          })
      })
      setUserJobs(array)
     }
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
            //setLoadingFollowers(true)
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
            //setLoadingFollowers(true)
          }}}
          />
      </View>
      < View style = {{flex : 1, marginTop : 7}}>
      { !Job && userPost == 0 &&
      <View>
        <Text style = {{marginTop : 70}}>Start searching for user and Jobs</Text>
        <Button
          title="Search"
          iconContainerStyle = {styles.PiconContainerStyle}
          titleStyle = {styles.PtitleStyle}
          buttonStyle = {styles.PuttonStyleJ}  
          containerStyle = {styles.PcontainerStyle}
          onPress={() => {
            navigations.navigate(NavigationTabs.Search.name)
            //setLoadingFollowers(true)
          }}
          />
      </View>
      }
        {Job && Post &&  userJobs == 0 &&
      <View>
        <Text style = {{marginTop : 70}}>Start searching for user and Jobs</Text>
        <Button
          title="Search"
          iconContainerStyle = {styles.PiconContainerStyle}
          titleStyle = {styles.PtitleStyle}
          buttonStyle = {styles.PuttonStyleJ}  
          containerStyle = {styles.PcontainerStyle}
          onPress={() => {
            navigations.navigate(NavigationTabs.Search.name)
            //setLoadingFollowers(true)
          }}
          />
      </View>
      }
      
      
        { !Job && userPost != 0 &&
        <FlatList
         data = {userPost}
         keyExtractor={(item) => item.key}
         //numColumns={1}
         horizontal = {false}
         extraData =  {userPost}
         //initialNumToRender={4}
         //initialNumToRender={20}
         renderItem = {({item, index}) => {
          //console.log(item);
          return (
            <AllPostCard props = {item}/>
          )}}
          refreshControl={
            <RefreshControl refreshing={loadingFollowers} onRefresh={loadFollowers} />
        }
        >
      </FlatList>
        }
        {
          Job && Post && 
          <FlatList
          data = {userJobs}
          keyExtractor={(item) => item.key}
          //numColumns={1}
          horizontal = {false}
          //extraData =  {selected}
          initialNumToRender={4}
          //initialNumToRender={20}
          renderItem = {({item, index}) => {
           //console.log(item);
           return (
             <AllJobsCard props = {item}/>
           )}}
           refreshControl={
             <RefreshControl refreshing={loadingFollowers} onRefresh={loadFollowers} />
         }
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



export default HomePage;