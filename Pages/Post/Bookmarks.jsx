import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Button, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Directions, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-navigation';
import PostCards from '../../Components/Cards';
import JobCard from '../../Components/JobCard';
// const theme = useTheme();
// const styles = useStyles(theme);

const Bookmarks =  ({ navigation }) => {

  const [Post ,setPost] = useState(null);
  const [Job ,setJob] = useState(false);
  
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
          { !Job &&
          <PostCards/>
          }
          {
            Job && Post && 
            <JobCard/>
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



export default Bookmarks;