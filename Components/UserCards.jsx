import React, { useEffect, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, Divider } from 'react-native-elements';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getUserbyEmail } from '../firebase/UserProvider';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../firebase/AuthProvider';
import { NavigationScreens } from '../Common/NavigationTabs/navigation';
import { NavigationTabs } from '../Common/NavigationTabs/navigation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const UserCard = ({props}) => {

    const navigations = useNavigation();
    const {currentUser} = useAuth();
    const [user, setUsers] = useState([]);
    const [loadinguUsers, setLoadinguUsers] = useState(false);
    //console.log(props.id);


    useEffect(() => {
        loadinguUser()
    },[props])
    
    
    const loadinguUser = async () => {
        try {
            setLoadinguUsers(true);
            const users = await getUserbyEmail(props.id);
            setUsers(users)
            //console.log(user.imageURL)
        } catch (err) {
           console.log(err)
        } finally {
            setLoadinguUsers(false);
        }
    };

    const LeftContent = props => <Avatar.Image size={40} onLoadEnd = {user.imageURL} source={ {uri : user.imageURL}} onPress={() => {}}/>
    return (
        <Card style = {styles.card}>
        <Card.Content>
         <TouchableOpacity style = {{flexDirection : 'row'}}
          onPress={() => {
              if(currentUser.email === props.id){
                  navigations.navigate(NavigationTabs.Profile.name)
              }
              else if(currentUser.email !== props.id){
                navigations.navigate(NavigationScreens.SearchProfile.name,{
                    email : props.id
                })
              }
          }}
         >
          {user.imageURL === undefined && 
          <Avatar.Image size={50} onLoadEnd = {user.imageURL} source={require("../assets/Avatar_Light.png")} colour = {'black'} onPress={() => {console.log('works')}}/>
          }
          {user.imageURL !== undefined &&
          <Avatar.Image size={50} onLoadEnd = {user.imageURL} source={{uri : user.imageURL}} colour = {'black'} onPress={() => {console.log('works')}}/>
          }
          <Title style = {{ marginLeft : 40 , color : '#233975' , fontSize : '16'}}>{user.account_name}</Title>
          </TouchableOpacity>
          <Paragraph style = {styles.textT}>{user.account_name} </Paragraph>
        </Card.Content>
        
      </Card>
    );
}
const styles = StyleSheet.create({
    card : {
        borderWidth : 1,
        //borderRadius : 1,
        marginBottom : 5,
        borderColor : '#233975',
        width : windowWidth,
        //height : 100,
        //padding :1,
        //margin : 3,
        backgroundColor : '#F2F2F2',
       //flexGrow : 4
   },
   cardImage :{
      height : windowHeight/3,
      width : windowWidth/1.05,
      alignSelf : 'center',
      marginBottom : 20
   },
   textT : {
     fontWeight : '400',
     fontSize : 13,
     //position : 'absolute',
     //left : 0,
     //top : -10,
     alignSelf : 'center',
     marginLeft : -102,
     marginTop : -25,
     marginBottom : 20,
     color : '#233975',
     //marginBottom : 15,
    
   },
   Para : {
     color : 'white',
   }
  }
);
export default UserCard;