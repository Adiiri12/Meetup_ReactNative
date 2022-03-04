import React, { useState } from 'react'
import {KeyboardAvoidingView, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { global } from '../../CSS/Styles';
import { Formik } from 'formik';
import ThemeForm from '../../Components/Form/ThemeForm';



const Themes = ({ navigation }) => {
     
    return (
        //<KeyboardAvoidingViewBase>
        <SafeAreaView style = {styles.container}>
            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
                <Text style={global.SText}>Step 3 of 4 </Text>
                <Text style={global.CreateText}>Which Themes Interest You</Text>
                <View style = {styles.Form}> 
                 <ThemeForm/>
                 </View>
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
        marginTop : 30,
        marginBottom :40
        //marginBottom : 350,
     },
     Text:{
        textAlign: 'left',
        marginTop: 5,
        marginLeft : 30,
        //fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: '300',
        color: "#233975"
     }
  })

  export default Themes;