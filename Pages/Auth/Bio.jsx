import React, { useState } from 'react'
import {KeyboardAvoidingView,Keyboard, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { global } from '../../CSS/Styles';
import { Formik } from 'formik';
import BioForm from '../../Components/Form/BioForm';




const Bio = ({ navigation , route}) => {
     
    const { First_name, Second_name, Account_name } = route.params;
    //console.log(route.params);
    console.log('im with the params');
    let props = {
        First_name : First_name,
        Second_name : Second_name,
        Account_name : Account_name
        }
    return (
        //<KeyboardAvoidingViewBase>
        <SafeAreaView style = {styles.container}>
         <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
                <TouchableWithoutFeedback style ={{marginTop : -20}}onPress={Keyboard.dismiss}>
                    <View>
                    <Text style={global.StepText}>Step 4 of 4 </Text>
                    <Text style={global.CreateText}>Add Display Image & Bio</Text>
                    <BioForm {...props}/>
                    </View>
                </TouchableWithoutFeedback>    
            </KeyboardAvoidingView>
        </SafeAreaView>
        //</KeyboardAvoidingViewBase>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#FFFFFF'
    },
    Form :{
        flex : 2,
        marginTop : 0,
        //marginBottom : 350,
     },
})

export default Bio;