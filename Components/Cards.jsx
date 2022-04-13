import React, { useEffect, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions , Picker } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Provider,Divider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-elements';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getUserbyEmail } from '../firebase/UserProvider';
import { useAuth } from '../firebase/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreens } from '../Common/NavigationTabs/navigation';
import { Menu,MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import { set } from 'firebase/database';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PostCards = ({props}) => {

    const navigations = useNavigation();
    const {currentUser} = useAuth();
    const [user, setUsers] = useState([]);
    const [loadinguUsers, setLoadinguUsers] = useState(false);
    const [visable , setVisable] = useState(false);
    const [id, setId] = useState('');
    const [image ,setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDes] = useState('');


  
    useEffect(() => {
        loadinguUser();
         setId(props.id)
         setImage(props.imageURL)
         setTitle(props.title)
         setDes(props.description)
        
    },[])
    
   
    
    const loadinguUser = async () => {
        try {
            setLoadinguUsers(true);
            const users = await getUserbyEmail(props.email);
            setUsers(users)
            //console.log(user)
        } catch (err) {
           console.log(err)
        } finally {
            setLoadinguUsers(false);
        }
    };

    if(props.email === currentUser.email)

    {
        
    const LeftContent = props => <Avatar.Image size={50} source={ {uri : user.imageURL}} onPress={() => {}}/>
    const RightContent = props => 
    <Menu style={{marginRight:10,padding:10}}>
   <MenuTrigger>
      <Ionicons name="menu" size={30} color="black" />
   </MenuTrigger>
      <MenuOptions style={{padding:5}}>
         <MenuOption onSelect={() => {
            navigations.navigate(NavigationScreens.Edit.name,{
                id : id,
                image : image,
                title : title,
                description : description
            })
            alert(`pressed1`)
            console.log()
            }}
            >
            <Text style={{color: 'black'}}>Edit</Text>
         </MenuOption>
         <MenuOption onSelect={() => alert(`pressed2`)} >
            <Text style={{color: 'black'}}>Delete</Text>
         </MenuOption>
      </MenuOptions>
   </Menu>
    
    return (
        <Card style = {styles.card}>
        <Card.Title titleStyle = {{ fontSize : 16}} title={user.account_name} left={LeftContent} right={RightContent}/>
        <Card.Content>
          <Paragraph style = {styles.textT}>{props.description}</Paragraph>
        </Card.Content>
        <Card.Cover  style = {styles.cardImage} source={{ uri: props.imageURL }} />
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

    else if(props.email === props.email)
    {
    
            const LeftContent = props => <Avatar.Image size={50} source={ {uri : user.imageURL}} onPress={() => {}}/>
            return (
                <Card style = {styles.card}>
                <Card.Title titleStyle = {{ fontSize : 16}} title={user.account_name} left={LeftContent} />
                <Card.Content>
                  <Paragraph style = {styles.textT}>{props.description}</Paragraph>
                </Card.Content>
                <Card.Cover  style = {styles.cardImage} source={{ uri: props.imageURL }} />
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
export default PostCards;