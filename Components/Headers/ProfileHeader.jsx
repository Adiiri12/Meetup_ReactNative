import { createStackNavigator } from '@react-navigation/stack';
import { Header ,  Text , Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { NavigationScreens, NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { useAuth } from '../../firebase/AuthProvider';
import { getUserbyEmail }  from '../../firebase/UserProvider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileHeader = ({navigation}) => {
    const navigations = useNavigation();
    const {currentUser} = useAuth();
    //getUserbyEmail(currentUser.email)
    //console.log(navigation);
    const [user, setUsers] = useState([]);
    const [loadinguUsers, setLoadinguUsers] = useState(false);

    useEffect(() => {
        loadinguUser();
    },[])

    
    const loadinguUser = async () => {
        try {
            setLoadinguUsers(true);
            const users = await getUserbyEmail(currentUser.email);
            setUsers(users)
            console.log(user.imageURL)
        } catch (err) {
           console.log(err)
        } finally {
            setLoadinguUsers(false);
        }
    };

    return (
          <Header
           containerStyle = {styles.headerContainer}
            centerComponent = {
              <View style = {{ width : windowWidth/1.1 , alignItems: 'center', justifyContent : 'center',}}>
                <Avatar.Image size={50} source={{uri : user.imageURL}} colour = {'black'} onPress={() => {console.log('works')}}/>
                <View style =  {{flexDirection : 'row' , marginTop : 20 , marginBottom : 10}}>
                    <Text style = {{fontSize : 12 , color : 'white'}}> Following 5</Text>
                    <Text style = {{ fontSize : 12 , color : 'white'}}> Follwers 25</Text>
                </View>
                <View style = {{marginTop : 10 , marginBottom : 0}}>
                <Text style = {{marginLeft : -15 , fontSize : 12 , color : 'white'}}>Bio: Welcome to my account I am a belive that everyone should re</Text>
                </View>
              </View>
            }
          />
      )
    };
    
    const styles = StyleSheet.create({ 
      headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#233975',
        flexDirection : 'column',
        paddingTop: Platform.OS === 'android' ? 25 : 10
      },
      heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
      },
      headerRight: {
        //display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
      },
      subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: 'white',
        marginLeft : -40,
        alignSelf : 'center',
        backgroundColor : '#e4e6e7',
        marginLeft: 6
        //resizeMode: 'contain'
      },
      Sinput: {
        marginTop : 16,
        marginLeft : 35,
        width: 245.36,
        height: 34,
        backgroundColor: '#FFFFFF',
        //paddingVertical: 10,
        //paddingHorizontal: 15,
        //borderColor: 'white',
        //borderWidth:3,
        borderRadius: 150, 
        fontSize: 10,
        //fontFamily: "Montserrat"
    }
 });






export  default ProfileHeader;