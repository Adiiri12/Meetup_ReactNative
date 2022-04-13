import React, { useEffect, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, Divider } from 'react-native-elements';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '../firebase/AuthProvider';
import { getUserbyEmail } from '../firebase/UserProvider';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreens } from '../Common/NavigationTabs/navigation';
import { Menu,MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


//const [waitForPost]





const AllJobsCard = ({props}) => {

    const navigations = useNavigation();
    const {currentUser} = useAuth();
    const [user, setUsers] = useState([]);
    const [loadinguUsers, setLoadinguUsers] = useState(false);

    useEffect(() => {
         loadinguUser();
         //console.log(props);
    },[]);
    
    const loadinguUser = async () => {
        try {
            setLoadinguUsers(true);
            const users = await getUserbyEmail(props.Job.email);
            setUsers(users)
            console.log(users)
        } catch (err) {
           console.log(err)
        } finally {
            setLoadinguUsers(false);
        }
    };


    const LeftContent = props => <Avatar.Image style = {{marginLeft:-20}} size={50} source={ {uri : user.imageURL}} onPress={() => {}}/>
    
    return (
        <Card style = {styles.card}>
        <Card.Content style = {{marginTop: -10}}>
          <Card.Title titleStyle = {{ color : '#233975', fontSize : 16}} title={user.account_name} left={LeftContent}/>
          <Title style = {{ marginLeft : 70 , marginTop : -25, marginBottom : 10 , color : '#233975' , fontSize : 16,fontWeight : '600'}}>{props.Job.title}</Title>  
          <Title style = {{ marginLeft : 70 , marginTop : -15, marginBottom : 5 , color : '#233975' , fontSize : 16,fontWeight : '400'}}>Click to View more or Apply</Title>    
    
        </Card.Content>
       
        <Card.Actions>
          <Button mode='contained' color='#233975' 
          style = {{borderRadius : 100, marginLeft : 75 , width : 200}}
          labelStyle = {{marginRight : 25}}
           >
            View More</Button>
            <Button icon = 'bookmark-outline' color='#233975' 
            style = {{marginLeft : 20}}
            labelStyle={{fontSize: 25}}
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
     fontWeight : '400',
     fontSize : 13,
     //position : 'absolute',
     //left : 0,
     //top : -10,
     //alignSelf : 'center',
     marginLeft : -65,
     marginTop : 25,
     marginBottom : 20,
     color : '#233975',
     //marginBottom : 15,
    
   },
   Para : {
     color : 'white',
   }
  }
);
export default AllJobsCard;