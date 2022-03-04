import React, { useState } from 'react'
import {KeyboardAvoidingView, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView,} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { global } from '../../CSS/Styles';
//import LoginForm from '../../Components/Form/LoginForm';
import { Formik } from 'formik';
import CreateAccountForm from '../../Components/Form/CreateAccoutForm';
import { useAuth } from '../../firebase/AuthProvider';


const Create = ({ navigation }) => {
     
    return (
        <SafeAreaView style = {styles.container}>
       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
                <Text style={global.StepText}>Step 1 of 4 </Text>
                <Text style={global.CreateText}>Create your account</Text>
                 <CreateAccountForm props = {NavigationScreens.Detail.name}/>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#FFFFFF'
    }
  })

  export default Create;

