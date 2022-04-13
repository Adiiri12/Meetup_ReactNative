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
import { getUserbyEmail } from '../../firebase/UserProvider';

const SearchHeader = ({navigation}) => {

const navigations = useNavigation();
const {currentUser} = useAuth();
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
        //console.log(user)
    } catch (err) {
       console.log(err)
    } finally {
        setLoadinguUsers(false);
    }
};
    //console.log(navigation);
    return (
          <Header
           containerStyle = {styles.headerContainer}
            leftComponent={
                <View style={styles.headerRight}>
                  <TouchableOpacity
                    style= {styles.image}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                  >
                  <Avatar.Image size={47}  source={ {uri : user.imageURL}} colour = {'black'} onPress={() => {console.log('works')}}/>
                  </TouchableOpacity>
                </View>
            }
            centerComponent = {
              <View style= {styles.Sinput}>
                    <TouchableOpacity
                    onPress={() => navigations.navigate(NavigationTabs.Search.name)}
                    >
                     <Icon
                      type="ionicon"
                      name="ios-search" 
                      color="#233975"
                      size = '20'
                      style={{marginRight : 200, marginTop : 6}}
                      />
                    <Text style ={{color:'grey',fontSize:13 , marginLeft : 90 , marginTop : -17}}>Search</Text>
                  </TouchableOpacity>
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






export  default SearchHeader;