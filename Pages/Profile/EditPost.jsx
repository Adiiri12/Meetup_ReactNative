import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, View ,SafeAreaView } from 'react-native';
import { NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-navigation'
import { Button, Text } from 'react-native-elements';
import UpdatePostForm from '../../Components/Form/UpdatePostForm';


// const theme = useTheme();
// const styles = useStyles(theme);




const EditPost =  ({ navigation , route }) => {



   //console.log(route.params)

    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
          <UpdatePostForm props = {route.params}/>
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
  });
  
  
  
  


export default EditPost;