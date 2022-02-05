import React, { useState } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { global } from '../../CSS/Styles';
//import LoginForm from '../../Components/Form/LoginForm';
import { Formik } from 'formik';
import LoginForm from '../../Components/Form/LoginForm';


var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Login = ({ navigation}) => {

    const {emailaddress,setAddress} = useState('');
    const {password ,setPassword} = useState('');

    return (
        //<KeyboardAvoidingViewBase>
        <SafeAreaView style={global.Logincontainer}>
                <View style={global.Screencontainer}>
                 <View style={global.SigninContainer}>
                    <Text style={global.LoginText}>Join Our Community</Text>
                    <Text style={global.BodyText}>Get full access today.</Text>
                    
                        <View style = {global.Form}>
                          <LoginForm
                          />
                  </View>
                 </View>

                <View style={global.SignupContainer}>
                  <View style={global.SignUpBox}>
                        <Text style={global.SignUpText}>
                          OR
                        </Text>
                        <Button
                            title="Create An Account"
                            iconContainerStyle = {global.BiconContainerStyle}
                            titleStyle = {global.CtitleStyle}
                            buttonStyle = {global.CuttonStyle}
                            containerStyle = {global.BcontainerStyle}
                            onPress={() => navigation.navigate(NavigationScreens.CreateAccount.name)}
                       />
                       <Button
                            title="Sign in With Google"
                            iconContainerStyle = {global.BiconContainerStyle}
                            titleStyle = {global.AtitleStyle}
                            buttonStyle = {global.AuttonStyle}
                            containerStyle = {global.BcontainerStyle}
                       />
                    </View>
                </View>
                </View>
        </SafeAreaView>
             
        
    )
    
}



  export default Login;