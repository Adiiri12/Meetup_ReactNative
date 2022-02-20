import React, { useState } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions,ImageBackground} from 'react-native';
import { Button, Text } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Constants from 'expo-constants';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { global } from '../CSS/Styles';


const ProfilePicture = ({props}) => {
  const [image, setImage] = useState(null);
  //const [status, requestPermission] = ImagePicker.useCameraPermissions();
 //const [Profile,setProfile] = useState('')
 

//  function handleChange() {
//     // Here, we invoke the callback with the new value
//     Profiles.onChange(this.Profile);
//     console.log(Profiles);
// }



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
    //console.log(props);
    if (!result.cancelled) {
      setImage(result.uri);
      setFieldValue(field, result.uri)
    }
  };



  return (
    <View>
 <TouchableOpacity style = {global.image} onPress={() => {pickImage(props.setFieldValue,'Profiles')}} > 
    {image &&
        <ImageBackground source={{ uri: image }} resizeMode= "cover" style = {{width : 90 , height : 80}}/>}
</TouchableOpacity>
  );
  </View>
  )
}

export default ProfilePicture;