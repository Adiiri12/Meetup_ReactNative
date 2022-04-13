import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity,Text, View,ActivityIndicator, StyleSheet,Dimensions,SafeAreaView} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { NavigationScreens, NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { FlatList } from 'react-native-gesture-handler';
import { useAuth } from '../../firebase/AuthProvider';
import { getAllUser } from '../../firebase/UserProvider';
import { acc } from 'react-native-reanimated';
import UserCard from '../../Components/UserCards';
import SearchProfileHeader from '../../Components/Headers/SearchProfileHeader';



// const theme = useTheme();
// const styles = useStyles(theme);


const SearchResults =  ({ navigation , route}) => {

const {name} = route.params;
console.log(name); 
const [account, setAccount] = useState(name)
//console.log(account);
const [user, setUsers] = useState([]);
const [loadinguUsers, setLoadinguUsers] = useState(false);
const [update , setUpdate] = useState(false)



useEffect(() => {
    getUser();
},[]);




const getUser = async () => {
    try {
        setLoadinguUsers(true);
        //setAccount(name
        console.log(account)
        const users = await getAllUser(name);
        setUsers(users)
        //setImage(users.imageURL)
        //console.log(user)
    } catch (err) {
       console.log(err)
    } finally {
        setLoadinguUsers(false);
    }
 };


    return (
      <View style={styles.container}>
            
     
          <FlatList
           data = {user}
           keyExtractor={item => item.id}
           //numColumns={1}
           horizontal = {false}
           //extraData =  {selected}
           renderItem = {({item , index}) => {
               console.log(item.account_name);
               return (
               <View style = {styles.Flatlistcontainer}>
               <UserCard props = {item}/>
               </View>
               )
           }}
          >

          </FlatList>
      </View>
    );
}



    


  const styles = StyleSheet.create({
    container:{
      flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#FFFFFF'
      },
      Flatlistcontainer:{
        flex  : 1,
        marginTop : 5,
        justifyContent : 'center',
        backgroundColor : '#FFFFFF',
        //height:height
        },
      boxContainer :{
        flex : 1,
        marginTop : 20,
        flexDirection : 'row'
      },
      TboxSize : {
         flexDirection : 'row',
         marginTop : 20,
         marginLeft : 5,
         height : 100,
         width : '45%',
         borderWidth : 1,
         borderRadius : 10,
         borderColor : '#233975',
         alignItems : 'center',
         backgroundColor : 'white'
      },
      FboxSize : {
          flexDirection : 'row',
          marginTop : 20,
          marginLeft : 5,
          height : 100,
         width : '45%',
          borderWidth : 1,
          borderRadius : 10,
          borderColor : '#233975',
          alignItems : 'center',
          backgroundColor : '#233975'
       },
      TrueText:{
          //marginTop: 10,
          marginLeft : 20,
          alignContent : 'center',
          //textAlign : 'center',
          //fontFamily: "Montserrat",
          fontSize: 14,
          fontWeight: '600',
          color: "#233975"
       },
       FalseText:{
          //marginTop: 10,
          marginLeft : 20,
          alignContent : 'center',
          //textAlign : 'center',
          //fontFamily: "Montserrat",
          fontSize: 14,
          fontWeight: '600',
          color: "#FFFFFF"
       },
       ButtonStyle : {
          //marginTop : 90,
          //marginBottom : 30,
  
          width: 300,
          marginHorizontal: 50,
          marginVertical: 10,
          marginLeft: 20,
          marginTop : 80
  
       }
  });
  


export default SearchResults;