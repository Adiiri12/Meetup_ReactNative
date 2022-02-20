import React, { useState } from 'react'
import {KeyboardAvoidingView, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView,} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { global } from '../../CSS/Styles';
//import LoginForm from '../../Components/Form/LoginForm';
import { Formik } from 'formik';
import DetailsForm from '../../Components/Form/DetailsForm';


const Details = ({ navigation }) => {
     
    return (
        <SafeAreaView style = {styles.container}>
        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
                <Text style={global.StepText}>Step 2 of 4 </Text>
                <Text style={global.CreateText}>Add Details</Text>
                 <DetailsForm props = {NavigationScreens.Bio.name}/>
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

  export default Details;

