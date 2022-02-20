import React, { useState } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { TextInput } from 'react-native-gesture-handler';
import { global } from '../../CSS/Styles';
import { Formik } from 'formik';



const VerifyForm = () =>{
     
    return (
      <View style ={global.CreateContainer}>
          <Formik
          initialValues={{Code : ''}}
          onSubmit={(values) =>{
          console.log(values);
          }}
          >
              {(props) => (  
               <View>
                   <TextInput
                    style = {global.CreateInput}
                    placeholder = 'code'
                    onChangeText={props.handleChange('Code')}
                    value={props.values.Code}
                   />
                <Button
                title="Verify Code"
                iconContainerStyle = {global.BiconContainerStyle}
                titleStyle = {global.CtitleStyle}
                buttonStyle = {global.ButtonStyle2}
                containerStyle = {global.BcontainerStyle}
                 onPress={props.handleSubmit}
                />
             </View>
              )}
        </Formik>
      </View>
    )
} 




export default VerifyForm;

