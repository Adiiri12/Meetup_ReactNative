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
//import CreateUser from '../../firebase/UserProvider';


const BioForm = (props) =>{

    const {currentUser} = useAuth();
    //const {CreateUser} = useStorage();
    //const {storage} = storage;


    console.log('bio page')
    console.log(props);
    console.log(currentUser.uid);
    const [image, setImage] = useState('');
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

    const addImage = async (account_name , first_name , last_name , bio ,user) =>{
      try{
        const response = await fetch(image);
        const blob = await response.blob()
        const imageTaskSnapshot = await Userprofile.child(`/userProfile/${currentUser.uid}`).put(blob);
        const imageURL = await imageTaskSnapshot.ref.getDownloadURL();
        setImageurl(imageURL)

        return await firestore.collection('users').doc(currentUser.email).
        set({
            account_name,
            bio,
            DisplayImage : imageURL,
            first_name,
            last_name,
            user
        })
        }catch{
            console.log('Data error')
      
    }}

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
            console.log(values);
            console.log('Here');
            addImage(props.Account_name,props.First_name,props.Second_name,values.Bio,currentUser.uid)
            //console.log(Profile);
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
                            <ImageBackground source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC' }} resizeMode= "cover" style = {{width : 90 , height : 80}}/>}
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

