import React, { useEffect, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, Divider } from 'react-native-elements';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getUserbyEmail } from '../firebase/UserProvider';
import { getUserPost } from '../firebase/PostProvider';
import { FlatList } from 'react-native-gesture-handler';
import { render } from 'react-dom';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AllPostCard = ({props}) => {

    //console.log(props.Post.email)

    const [user, setUsers] = useState([]);
    const [loadinguUsers, setLoadinguUsers] = useState(false);

    //const [waitForPost]


    useEffect(() => {
        loadinguUser();
        //console.log(props);
    },[]);
    
    const loadinguUser = async () => {
        try {
            setLoadinguUsers(true);
            const users = await getUserbyEmail(props.Post.email);
            setUsers(users)
            console.log(user)
        } catch (err) {
           console.log(err)
        } finally {
            setLoadinguUsers(false);
        }
    };


    const LeftContent = props => <Avatar.Image size={50} source={ {uri : user.imageURL}} onPress={() => {}}/>
    return (
   
        <Card style = {styles.card}>
        <Card.Title titleStyle = {{ fontSize : 16}} title={user.account_name} left={LeftContent}/>
        <Card.Content>
            <Title></Title>
          <Paragraph style = {styles.textT}>{props.Post.description.trim()}</Paragraph>
        </Card.Content>
        <Card.Cover  style = {styles.cardImage} source={{ uri: props.Post.imageURL }} onLoadEnd ={props.Post.imageURL}/>
        <Card.Actions>
        <Button icon = 'heart-outline' color='#233975' 
            style = {{}}
            labelStyle={{fontSize: 20}}
           >
        <Text style={{fontSize: 12}}>21</Text>
        </Button>
        <Button icon = 'comment-outline' color='#233975' 
            style = {{}}
            labelStyle={{fontSize: 20}}
           >
        <Text style={{fontSize: 12}}>10</Text>
        </Button>
          <Button
          style = {{marginLeft : 150}}
          labelStyle={{fontSize: 12, color : '#233975'}}
          >Share</Button>
          <Button icon = 'bookmark-outline' color='#233975' 
            style = {{}}
            labelStyle={{fontSize: 20}}
           >
           </Button>
        </Card.Actions>
        
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
     fontWeight : '500',
     fontSize : 15,
     //position : 'absolute',
     //left : 0,
     //top : -10,
     alignSelf : 'center',
     marginLeft : -18,
     marginTop : -10,
     marginBottom : 20,
     color: '#233975',
     //marginBottom : 15,
    
   },
   Para : {
     color : 'white',
   }
  }
);
export default AllPostCard;