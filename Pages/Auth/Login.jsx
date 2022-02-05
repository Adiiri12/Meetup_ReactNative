import React, { useState } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Text,Dimensions} from 'react-native';
//import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'



var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Login = ({ navigation }) => {
     
    return (
        //<KeyboardAvoidingViewBase>
             <View style={styles.Screencontainer}>
                <View style={styles.container}>
                 <View style={styles.LoginContainer}>
                    <Text style={styles.LoginText}>
                    Login Screen
                    </Text>
                 </View>
                <View style={styles.container2}>
                  <View style={styles.SignUp}>
                        <Text>
                          OR
                        </Text>
                    </View>
                </View>
                </View>
             </View>
             
        //</KeyboardAvoidingViewBase>
    )
    
}

const styles = StyleSheet.create({
    Screencontainer:{
        flex : 1,
        flexDirection : 'column',
        //alignItems: 'center',
        //justifyContent: 'center',
        
    },
    container:{
        flex : 1,
        justifyContent : 'center',
        backgroundColor : '#233975',
        height:height

        
    },
    container2:{
        flex : 2,
        justifyContent : 'center',
        backgroundColor : '#F2F2F2',
        flexDirection:'column',
        height:height
        
    },
    LoginContainer : {
       height : height * 0.5
    },
    SignUp : {
        height : height * 0.5

    },
    LoginText:{
        alignItems : 'center',
        fontFamily: "Montserrat",
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
  })

  export default Login;