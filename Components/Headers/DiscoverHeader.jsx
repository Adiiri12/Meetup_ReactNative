import { createStackNavigator } from '@react-navigation/stack';
import { Header ,  Text , Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView,TextInput} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { NavigationScreens, NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';

const DiscoverHeader = ({navigation}) => {
    const navigations = useNavigation();
    //console.log(navigation);
    return (
          <Header
           containerStyle = {styles.headerContainer}
            centerComponent = {
              <View style= {styles.Sinput}>
                    <TouchableOpacity
                    >
                     <Icon
                      type="ionicon"
                      name="ios-search" 
                      color="#233975"
                      size = '20'
                      style={{marginRight : 260, marginTop : 6}}
                      />
                    <TextInput style ={{color:'black',fontSize:13 , marginLeft : 40 , marginTop : -17}}
                     placeholder = 'email address'
                    />
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
        marginTop : 4,
        marginLeft : -15,
        width: 300.36,
        height: 34,
        backgroundColor: '#FFFFFF',
        //paddingVertical: 10,
        //paddingHorizontal: 15,
        //borderColor: 'white',
        //borderWidth:3,
        borderRadius: 10, 
        fontSize: 10,
        //fontFamily: "Montserrat"
    }
 });






export  default DiscoverHeader;