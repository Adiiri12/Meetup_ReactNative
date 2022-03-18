import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, View ,SafeAreaView } from 'react-native';
import { NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-navigation'
import { Button, Text } from 'react-native-elements';
import PostForm from '../../Components/Form/PostForm';
import JobForm from '../../Components/Form/JobForm';

// const theme = useTheme();
// const styles = useStyles(theme);




const Post =  ({ navigation }) => {

  const [Posts ,setPost] = useState(null);
  const [Job ,setJob] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
          <View style={{flexDirection:'row'}}>
            <Button
            title="Create Post"
            iconContainerStyle = {styles.PiconContainerStyle}
            titleStyle = {Posts ? styles.PtitleStyle : styles.PtitleStyleJ}
            buttonStyle = {Posts ? styles.PuttonStyleJ : styles.PuttonStyle}
            containerStyle = {styles.PcontainerStyle}
            onPress={() => {if(Posts){
              setPost(false)
              setJob(false)
              console.log(Posts);
            }}}
            />
            <Button
            title=" Create a Job"
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
          <PostForm/>
          }
          {
            Job && Posts && 
            <JobForm/>
          }
        </View>
       </View> 
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop : -8
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
  
  
  
  


export default Post;