import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-navigation'
import { useAuth } from '../../firebase/AuthProvider';




// const theme = useTheme();
// const styles = useStyles(theme);

const Profile =  ({ navigation }) => {


  const {signOut} = useAuth();

const HandleSignout = async () =>{
 
    await signOut()
}

    return (
      <View style={styles.container}>
        <Text>User Account</Text>
        <TouchableOpacity onPress={() => HandleSignout()}>
         <Text style = {styles.Texts}>Log out</Text>
         </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
   Texts:{
      fontSize: 40,
      color : 'blue'
    }
  });
  


export default Profile;