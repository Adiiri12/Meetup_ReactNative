import React, { useState } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, SafeAreaView,StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'




const Create = ({ navigation }) => {
     
    return (
        //<KeyboardAvoidingViewBase>
        <SafeAreaView>
                 <Text>Create Account Screen</Text>
        </SafeAreaView>
        //</KeyboardAvoidingViewBase>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center'
        
    }
  })

  export default Create;

