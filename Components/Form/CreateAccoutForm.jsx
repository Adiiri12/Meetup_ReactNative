import React, { useState } from 'react'
import {KeyboardAvoidingView, TouchableOpacity, View, StyleSheet,Dimensions,Platform} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { TextInput } from 'react-native-gesture-handler';
import { global } from '../../CSS/Styles';
import { Formik } from 'formik';
import * as yup from 'yup'
import { useAuth } from '../../firebase/AuthProvider';
import { useNavigation } from '@react-navigation/native';

const CreateAccountValidationSchema = yup.object().shape({
  emailaddress: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
     password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
    password2: yup
    .string()
    .oneOf([yup.ref('password'),null],'Passwords Must match')
    .required('Password is required'),
})

const CreateAccountForm = ({props}) =>{


  const navigations = useNavigation();
  const { signUp  } = useAuth();
  const [errors , setErrors] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (emailaddress, password) =>{
    try {
      await signUp(emailaddress,password)
    }catch{
          setErrors('not working')
    }
  }




    return (
      <View style ={global.CreateContainer}>
          <Formik
          validationSchema={CreateAccountValidationSchema}
          initialValues={{emailaddress : '' , password : '' , password2 : ''}}
          onSubmit={(values) =>{
          console.log(values);
          console.log(errors)
          handleSignup(values.emailaddress,values.password);
          alert('done');
          navigations.navigate(NavigationScreens.Detail.name);
          }}
          >
              {(props) => ( 
                 <View>
                   {/* {currentUser} */}
                   {/* {errors && <Text>{errors}</Text>} */}
                    <Text style={global.CTs}>Email Address</Text>
                   <TextInput
                    style = {global.CreateInput}
                    placeholder = 'email address'
                    onChangeText={props.handleChange('emailaddress')}
                    value={props.values.emailaddress}
                   />
                      {props.errors.emailaddress &&
                      <Text style={{ fontSize: 10, marginLeft: 20,color: 'red' }}>{props.errors.emailaddress}</Text>
                      }
                  <Text style={global.CTs}>Password</Text>
                    <TextInput
                    style = {global.CreateInput}
                    placeholder = 'Password'
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                    secureTextEntry
                   />
                    {props.errors.password &&
                      <Text style={{ fontSize: 10, marginLeft: 20,color: 'red' }}>{props.errors.password}</Text>
                      }
                    <Text style={global.CTs}>Password</Text>
                    <TextInput
                    style = {global.CreateInput}
                    placeholder = 'Password'
                    onChangeText={props.handleChange('password2')}
                    value={props.values.password2}
                    secureTextEntry
                   />
                    {props.errors.password2 &&
                      <Text style={{ fontSize: 10, marginLeft: 20,color: 'red' }}>{props.errors.password2}</Text>
                      }
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
        <TouchableOpacity
        onPress={() => navigations.navigate(props)}
        >
        <Text style={global.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
    )
} 




export default CreateAccountForm;

