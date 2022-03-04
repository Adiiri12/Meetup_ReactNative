import React, { useState } from 'react'
import {KeyboardAvoidingView, TouchableOpacity, View, StyleSheet,Dimensions,Platform} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { TextInput } from 'react-native-gesture-handler';
import { global } from '../../CSS/Styles';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';



const DetailsForm = ({props}) =>{
    const navigations = useNavigation();
    return (
      <View style ={global.CreateContainer}>
          <Formik
          initialValues={{First_name : '' , Second_name : '' , Account_name : ''}}
          onSubmit={(values) =>{
          console.log(values);
          navigations.navigate(NavigationScreens.Bio.name ,{
            First_name : values.First_name,
            Second_name : values.Second_name,
            Account_name : values.Account_name
          })
          }}
          >
              {(props) => ( 
                 <View
                 >
                    <Text style={global.CTs}>Full Name</Text>
                   <TextInput
                    style = {global.CreateInput}
                    placeholder = 'First name'
                    onChangeText={props.handleChange('First_name')}
                    value={props.values.First_name}
                   />
                  <Text style={global.CTs}>Last Name</Text>
                    <TextInput
                    style = {global.CreateInput}
                    placeholder = 'Last Name'
                    onChangeText={props.handleChange('Second_name')}
                   value={props.values.Second_name}
                   />
                    <Text style={global.CTs}>Account name</Text>
                    <TextInput
                    style = {global.CreateInput}
                    placeholder = 'Account name'
                    onChangeText={props.handleChange('Account_name')}
                   value={props.values.Account_name}
                   />
                <Button
                title="Create"
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




export default DetailsForm;

