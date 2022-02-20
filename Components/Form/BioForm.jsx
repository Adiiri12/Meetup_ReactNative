import React, { useState } from 'react'
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
//import CreateUser from '../../firebase/UserProvider';


const BioForm = (props) =>{

    const {currentUser} = useAuth();
    //const {CreateUser} = useStorage();
    //const {storage} = storage;

    console.log(props);
    console.log(currentUser.uid);
    const [image, setImage] = useState(null);
    const [imageurl , setImageurl] = useState('')
    const Userprofile = storage.refFromURL('gs://volunteer-dddb5.appspot.com');
    const CreateUser = async (account_name , first_name , last_name , bio , DisplayImage,user) =>{

        return await firestore.collection('users').doc(currentUser.email).
        set({
            account_name,
            bio,
            DisplayImage,
            first_name,
            last_name,
            user
        })
    }
    const pickImage = async (setFieldValue, field) => {

        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your photos!");
          return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        //console.log(result);
        console.log(result);
        try{
        const response = await fetch(result.uri);
        const blob = await response.blob()
        const imageTaskSnapshot = await Userprofile.child(`/userProfile/ ${currentUser.uid}`).put(blob);
        const imageURL = await imageTaskSnapshot.ref.getDownloadURL();
        setImageurl(imageURL)
        }catch{
            console.log('error')
        }
        // const ref =  currentUser
        // .storage
        // .ref()
        // .child('/userProfile/' + currentUser.uid)
        // .put(blob)
        // ;
        
        //console.log(props);
        if (!result.cancelled) {
          setImage(result.uri);
          setFieldValue(field, result.uri)
        }
      };
    
    return (
        <View style ={global.CreateContainer}>
            <Formik
            initialValues={{Profiles: '', Bio : ''}}
            onSubmit={(values) =>{
            //
            console.log(values);
            console.log('Here');
            CreateUser(props.Account_name,props.First_name,props.Second_name,values.Bio,imageurl,currentUser.uid);
            //console.log(Profile);
            }}
            >
                {(props) => 
                (  
                 <View>
                    <Text style={styles.LoginText}>Profile</Text>
                    <TouchableOpacity style = {global.image} onPress={() => {pickImage(props.setFieldValue,'Profiles')}} > 
                        {image &&
                            <ImageBackground source={{ uri: image }} resizeMode= "cover" style = {{width : 90 , height : 80}}/>}
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

