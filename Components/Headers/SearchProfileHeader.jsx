import { createStackNavigator } from '@react-navigation/stack';
import { Header ,  Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView,ActivityIndicator} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { NavigationScreens, NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, Title, Paragraph ,Button } from 'react-native-paper';
import { useAuth } from '../../firebase/AuthProvider';
import { getUserbyEmail }  from '../../firebase/UserProvider';
import { Follow , UnFollow,checkFollower } from '../../firebase/FollowingProvider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const  SearchProfileHeader = ({navigation,props}) => {
    //console.log('im at searchProifile')
    //console.log(props)
    const navigations = useNavigation();
    const {currentUser} = useAuth();
    //console.log(currentUser.email)
    //console.log(navigation);
    const [user, setUsers] = useState([]);
    const [loadinguUsers, setLoadinguUsers] = useState(false);
    const [follow, setFollow] = useState();

    useEffect(() => {
        //console.log(props)
        loadinguUser();
    },[])

    
    const loadinguUser = async () => {
        try {
            setLoadinguUsers(true);
            const users = await getUserbyEmail(props);
            const check = await checkFollower(currentUser.email,props)
            //console.log(check)
            setFollow(check)
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
                <Avatar.Image size={57}  onLoadEnd = {user.imageURL} source={ {uri : user.imageURL}} colour = {'black'} onPress={() => {console.log('works')}}/>
                <View style =  {{flexDirection : 'row' , marginTop : 20 , marginBottom : 10}}>
                    <Text style = {{fontSize : 12 , color : 'white'}}> Following 5</Text>
                    <Text style = {{ fontSize : 12 , color : 'white'}}> Follwers 25</Text>
                </View>
                <View style = {{marginTop : 10 , marginBottom : 0}}>
                <Text style = {{marginLeft : -15 , fontSize : 12 , color : 'white'}}>{user.bio}</Text>
                </View>
                <View style = {{marginTop : 10 , marginBottom : 0}}>
                {!follow &&
                 <Button  mode="outlined" 
                  onPress={() => {
                    console.log('Follow');
                    setFollow(true)
                    Follow(currentUser.email,props)

                }}
                  style = {{backgroundColor : '#ffffff'}}
                  labelStyle = {{fontSize : 12, color : '#233975'}}
                  >
                   Follow
                 </Button>
             }{follow &&
                 <Button  mode="outlined" 
                  onPress={() => {
                    console.log('Unfollow');
                    setFollow(false)
                    UnFollow(currentUser.email,props)
                }}
                  style = {{backgroundColor : '#ffffff'}}
                  labelStyle = {{fontSize : 12, color : '#233975'}}
                  >
                   Unfollow
                 </Button>
            }
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






export  default SearchProfileHeader;