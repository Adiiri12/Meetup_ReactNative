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
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements/dist/icons/Icon';
//import CreateUser from '../../firebase/UserProvider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const JobForm = (props) =>{

  const navigations = useNavigation();
    // const {currentUser} = useAuth();
    //const {CreateUser} = useStorage();
    //const {storage} = storage;


    ///console.log('bio page')
    //console.log(props);
    // console.log(currentUser.uid);
    const [image, setImage] = useState('');
    const [data, setData] = useState(true);
    const [imageurl , setImageurl] = useState(null)

    const Userprofile = storage.refFromURL('gs://volunteer-dddb5.appspot.com');


    // const CreateUser = async (account_name , first_name , last_name , bio , DisplayImage,user) =>{

    //     return await firestore.collection('users').doc(currentUser.email).
    //     set({
    //         account_name,
    //         bio,
    //         DisplayImage,
    //         first_name,
    //         last_name,
    //         user
    //     })
    // }

    const pic = async () =>{
      const response = await fetch(image);
      const blob = await response.blob()
      const imageTaskSnapshot = await Userprofile.child(`/userProfile/${currentUser.uid}.jpg`).put(blob);
      const imageURL = imageTaskSnapshot.ref.getDownloadURL().then((imageURL) => {
        console.log(imageURL);
      });
      setImageurl(imageURL)
    }
    const addImage = async (account_name , first_name , last_name , bio ,user) =>{
      
      await pic();

      return await firestore.collection('users').doc(currentUser.email).
        set({
            account_name,
            bio,
            DisplayImage : imageurl,
            first_name,
            last_name,
            user
        }) .then(() => {
          console.log('success');
        }).catch(error => {
          console.log(error);
        });
      }

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
        initialValues={{First_name : '' , Second_name : '' , Account_name : ''}}
        onSubmit={(values) =>{
        console.log(values);
        }}
        >
            {(props) => ( 
               <View>
                  <Text style={styles.CT1}>Title</Text>
                 <TextInput
                  style = {global.CreateInput}
                  placeholder = 'Title'
                  onChangeText={props.handleChange('First_name')}
                  value={props.values.First_name}
                  />
                 <Text style={styles.CT1}>Add Image</Text>
                 <TouchableOpacity style = {global.multi2} onPress={() => {pickImage()}} > 
                        { image !== '' && 
                            <ImageBackground source={{ uri: image }} resizeMode= "cover" style = {{width : 90 , height : 80}}/>
                          }
                            { image == '' && 
                            <ImageBackground source={require('../../assets/Avatar_Dark.png')} resizeMode= "cover" style = {{flex:1 , width: undefined, height: undefined}}/>}
                    </TouchableOpacity>
                 <Text style={styles.CT1}>Add Description</Text>
                 <TextInput
                     style = {global.multi}
                     placeholder = 'Description'
                     multiline={true}
                     numberOfLines = {4}
                     onChangeText={props.handleChange('Bio')}
                     value={props.values.Bio}
                 />
              <Button
              title="Add"
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
    CTs:{
        textAlign: 'left',
        marginTop: 20,
        marginBottom : 10,
        marginLeft : 40,
        //fontFamily: "monospace",
        fontSize : 14,
        fontWeight: '300',
        color : '#233975'
    },
    advance:{
        textAlign: 'left',
        //marginTop: 20,
        //marginBottom : 10,
       // marginLeft : 10,
        //fontFamily: "monospace",
        fontSize : 16,
        fontWeight: '300',
        color : '#233975'
    },
    CT1:{
        //textAlign: 'left',
        marginTop: 10,
        marginBottom : 5,
        marginRight : 40,
        alignSelf : 'center',
        fontSize : 14,
        fontWeight: '400',
        color : '#233975'
    },
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


export default JobForm;


