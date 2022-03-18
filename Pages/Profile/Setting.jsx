import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View , Dimensions,ScrollView} from 'react-native';
import { NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-navigation'
import { useAuth } from '../../firebase/AuthProvider';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import UpdateAccountForm from '../../Components/Form/UpdateAccountForm';




// const theme = useTheme();
// const styles = useStyles(theme);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Settings =  ({ navigation }) => {


  const {signOut , Logout} = useAuth();

const HandleSignout = async () =>{
 
    await signOut()
    await Logout()
}

    return (
      <View style={styles.container}>
          <ScrollView contentContainerStyle = {styles.subContainer}>
         <UpdateAccountForm/>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => HandleSignout()}>
         <Text style = {styles.Texts}>Log out</Text>
         </TouchableOpacity>
        </ScrollView>
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
    },
    subContainer:{
        flex : 1,
        alignItems: 'center',
        marginTop : 10,
        //marginBottom : 10
    },
    Row : {
        flexDirection : 'row' , marginBottom : 10, width : windowWidth
    }
  });
  


export default Settings;