import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationTabs} from '../../Common/NavigationTabs/navigation';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { useAuth } from '../../firebase/AuthProvider';
import { getUserbyEmail } from '../../firebase/UserProvider';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CustomDraw = (props ,navigation) => {



  const navigations = useNavigation();
  const {currentUser , signOut} = useAuth();
  const [user, setUsers] = useState([]);
  const [loadinguUsers, setLoadinguUsers] = useState(false);
  //console.log(props.id);


  useEffect(() => {
      loadinguUser();
  },[])
  
  
  const loadinguUser = async () => {
      try {
          setLoadinguUsers(true);
          const users = await getUserbyEmail(currentUser.email);
          setUsers(users)
          console.log(user)
      } catch (err) {
         console.log(err)
      } finally {
          setLoadinguUsers(false);
      }
  };

  //console.log(props)
    return (
        <SafeAreaView style={{flex: 1 ,backgroundColor : '#233975'}}>
        {/*Top Large Image */}
        <DrawerContentScrollView {...props}

        contentContainerStyle = {{backgroundColor : '#233975'}}
        >
        <View style = {{flexDirection : 'row'}}>
        <Avatar.Image size={50} style = {{marginLeft: 8 , marginTop : -25}} source={ {uri : user.imageURL}} colour = {'black'} onPress={() => {console.log('works')}}/>
        <Text style ={styles.UserName}>{user.account_name}</Text>
        </View>
        <Text style ={styles.UserName}>{currentUser.email}</Text>
          <DrawerItemList {...props} 
          />
          <View style = {{flex : 1, backgroundColor : 'white', paddingTop:10}}>
            <DrawerItem
            label="Home"
            labelStyle = {styles.DrawItem}
            style = {{marginTop : 30, marginBottom: 20}}
            onPress={() => props.navigation.navigate(NavigationTabs.Home.name)}
          />
          <DrawerItem
            label="Account"
            labelStyle = {styles.DrawItem}
            style = {{marginTop : 10, marginBottom: 20}}
            onPress={() => props.navigation.navigate(NavigationTabs.Profile.name,{screen:NavigationScreens.Setting.name})}
          />
           <DrawerItem
            label="Bookmarks"
            labelStyle = {styles.DrawItem}
            style = {{marginTop : 10, marginBottom: 400}}
            onPress={() => props.navigation.navigate(NavigationTabs.Post.name,{screen:NavigationScreens.Bookmarks.name})}
          />
          </View>
        </DrawerContentScrollView>
        <View style ={{padding:20 , borderWidth : 1, borderTopColor : 'white', borderBottomColor : '#233975'}}>
        <TouchableOpacity
        onPress={() => {signOut()}}
        >
        <Text
          style={{
            fontSize: 26,
            fontFamily : 'TimesNewRomanPS-BoldMT',
            fontWeight : 'bold',
            marginTop : 10,
            textAlign: 'center',
            color: 'white'
          }}>
          Sign Out
        </Text>
        </TouchableOpacity>  
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'center',
    },
    iconStyle: {
      width: 15,
      height: 15,
      marginHorizontal: 5,
    },
    customItem: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor : 'white'
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 2,
      borderColor: 'white',
      //marginLeft : -40,
      //alignSelf : 'center',
      backgroundColor : '#e4e6e7',
      marginLeft: 8,
      marginTop : -25
      //resizeMode: 'contain'
    },
    DrawItem :{
      fontSize : 20 , 
      fontWeight : 'bold' , 
      fontStyle: 'italic' , 
      fontFamily : 'TimesNewRomanPS-BoldItalicMT', 
      color : '#233975' , 
      //textAlign: 'center'
      marginLeft : 22

    },
    UserName : {
      fontSize : 15 , 
      fontFamily : 'Times New Roman', 
      color : 'white' , 
      //textAlign: 'center'
      marginLeft : 10
    }
  });

export default CustomDraw;