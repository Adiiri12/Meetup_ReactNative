import React, { useState } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions,SafeAreaView} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { global } from '../../CSS/Styles';
import { Formik } from 'formik';
import VerifyForm from '../../Components/Form/VerifyForm';



const Verify = ({ navigation }) => {
     
    return (
        //<KeyboardAvoidingViewBase>
        <SafeAreaView style = {styles.container}>
            <View>
                <Text style={global.StepText}>Step 2 of 4 </Text>
                <Text style={global.CreateText}>Enter Verification Code</Text>
                <View style = {styles.Form}> 
                 <VerifyForm/>
                 <Text style={styles.Text}>Incorrect Email ?</Text>
                 <Text style={styles.Text}>Resend Code</Text>
                 </View>
             </View>
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
     Text:{
        textAlign: 'left',
        marginTop: 10,
        marginLeft : 30,
        //fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: '300',
        color: "#233975"
     }
  })

  export default Verify;