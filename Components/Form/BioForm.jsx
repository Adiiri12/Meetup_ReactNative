import React, { useState, useEffect } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions,ImageBackground} from 'react-native';
import { Button, Text } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Constants from 'expo-constants';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { TextInput } from 'react-native-gesture-handler';
import { global } from '../../CSS/Styles';
import { Formik } from 'formik';
import ProfilePicture from '../ProfilePicker';
import { useAuth } from '../../firebase/AuthProvider';
import { auth, firestore , storage } from '../../firebase/firebase';
import { useNavigation } from '@react-navigation/native';
import { CreateUser } from '../../firebase/UserProvider'

//import CreateUser from '../../firebase/UserProvider';


const BioForm = (props) =>{

  const navigations = useNavigation();
    const {currentUser} = useAuth();
    //const {CreateUser} = useStorage();
    //const {storage} = storage;


    ///console.log('bio page')
    //console.log(props);
    console.log(currentUser.uid);
    const [image, setImage] = useState('');
    const [data, setData] = useState(true);
    const [imageurl , setImageurl] = useState(null)
    const [email, setEmail] = useState (currentUser.email)
  

   
    const pickImage = async () => {

      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      try{
        const result = await ImagePicker.launchImageLibraryAsync({
          presentationStyle: 0,
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        try{
        if (!result.cancelled) {setImage(result.uri)}
        }catch{console.log('image error')}
        }catch{console.log('error')} 
        //console.log(result);
      };
    
    return (
        <View style ={global.CreateContainer}>
            <Formik
            initialValues={{Profiles: '', Bio : ''}}
            onSubmit={(values) =>{
            //
            ///console.log(values);
            console.log(email);
            console.log(image)
            CreateUser(image,props.Account_name,props.First_name,props.Second_name,values.Bio,currentUser.uid,email)
            navigations.navigate(NavigationScreens.Themes.title)
            }}
            >
                {(props) => 
                (  
                 <View>
                    <Text style={styles.LoginText}>Profile</Text>
                    <TouchableOpacity style = {global.image} onPress={() => {pickImage()}} > 
                        { image !== '' && 
                            <ImageBackground source={{ uri: image }} resizeMode= "cover" style = {{width : 90 , height : 80}}/>
                          }
                            { image == '' && 
                            <ImageBackground source={require('../../assets/Avatar_Dark.png')} resizeMode= "cover" style = {{width : 90 , height : 80}}/>}
                    </TouchableOpacity>
                     <Text style={styles.LoginText}>Bio</Text>
                     <TextInput
                     style = {global.multi}
                     placeholder = 'email address'
                     multiline={true}
                     numberOfLines = {4}
                     onChangeText={props.handleChange('Bio')}
                     value={props.values.Bio}

                     />
                  <Button
                  title="Add Image & Bio"
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

const styles = StyleSheet.create({
    LoginText:{
        //textAlign: 'centre',
        marginTop: 20,
        marginBottom : 20,
        alignSelf : 'center',
        marginLeft : -50,
        //fontFamily: "Montserrat",
        fontSize: 15,
        fontWeight: "bold",
        color: "#233975"
    },
})


export default BioForm;

