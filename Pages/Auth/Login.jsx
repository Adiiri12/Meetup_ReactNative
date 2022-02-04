import React, { useState } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'


const theme = useTheme();
const styles = useStyles(theme);

const Login = ({ navigation }) => {
     
    return (
        <KeyboardAvoidingViewBase>
             
        </KeyboardAvoidingViewBase>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center'
        
    }
  })