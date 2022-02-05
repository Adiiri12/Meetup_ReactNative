import React, { useState } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { global } from '../../CSS/Styles';


const LoginForm = () =>{
     
    return (
      <View style ={global.Logincontainer}>
          <Formik
          initialValues={{emailaddress : '' , password : ''}}
          onSubmit={(values) =>{
          console.log(values);
          }}
          >
              {(props) => (
               <View>
                   <Text style={global.SignText}>Email </Text>
                   <TextInput
                    style = {global.Sinput}
                    placeholder = 'email address'
                    onChangeText={props.handleChange('emailaddress')}
                    value={props.values.emailaddress}
                   />
                  <Text style={global.SignText}>Password</Text>
                    <TextInput
                    style = {global.Sinput}
                    placeholder = 'Password'
                    onChangeText={props.handleChange('password')}
                   value={props.values.password}
                   />
                <Button
                title="Sign In"
                iconContainerStyle = {global.BiconContainerStyle}
                titleStyle = {global.BtitleStyle}
                buttonStyle = {global.ButtonStyle}
                containerStyle = {global.BcontainerStyle}
               onPress={props.handleSubmit}
                />
             </View>
              )}
        </Formik>
      </View>
    )
} 




export default LoginForm;