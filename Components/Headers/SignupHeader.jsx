import { createStackNavigator } from '@react-navigation/stack';
import { Header ,  Text , Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView} from 'react-native';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';

const SignUpHeader = ({props}) => {
    const navigations = useNavigation();
    console.log(props);
    return (
          <Header
           containerStyle = {styles.headerContainer}
            leftComponent={
                <Icon
                type="ionicon"
                name="ios-arrow-back-outline" 
                color="white"
                //onPress={() => navigations.goBack()}
                />
                
            }
            // rightComponent={
            //     <View style={styles.headerRight}>
            //       <TouchableOpacity
            //         style={{ marginLeft: 10 }}
            //         onPress={() => navigations.navigate(props)}
            //       >
            //         <Text style ={{color:'white',fontSize:15}}>Next</Text>
            //       </TouchableOpacity>
            //     </View>
            // }
          />
      )
    };
    
    const styles = StyleSheet.create({ 
      headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#233975',
        flexDirection : 'column',
        //paddingTop: Platform.OS === 'android' ? 25 : 10
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
 });






export  default SignUpHeader;