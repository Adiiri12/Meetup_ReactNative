import React, { useState, useEffect } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity, View, StyleSheet,Dimensions,ImageBackground,ActivityIndicator} from 'react-native';
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
import { CreatePost } from '../../firebase/PostProvider';
import { getUserbyEmail } from '../../firebase/UserProvider';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UpdatePostForm = (props) =>{

  const navigations = useNavigation();

    const [image, setImage] = useState('');
    const {currentUser} = useAuth();
    const [user, setUsers] = useState([]);
    const [loadinguUsers, setLoadinguUsers] = useState(false);
    const [update , setUpdate] = useState(false)


    console.log(props.props.image)
    useEffect(() => {
        loadinguUser();
        //setAccount(user.bio);

    },[])

    const loadinguUser = async () => {
        try {
            setLoadinguUsers(true);
            const users = await getUserbyEmail(currentUser.email);
            setUsers(users)
            //setImage(users.imageURL)
            //console.log(user)
        } catch (err) {
           console.log(err)
        } finally {
            setLoadinguUsers(false);
        }
    };


   const EditPost = async(image, tilte , description) =>{
        setUpdate(true);
        const updating = await CreatePost(image,tilte,description,currentUser.email)
        try{
        if(updating){
            setUpdate(false)
        }}catch{console.log('error')}
        finally{
            //console.log('finised')
            setUpdate(false);
        }
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
         enableReinitialize 
         initialValues={{
             title : '', 
             bio : ''
         }}
        onSubmit={(values) =>{
        console.log(values);
        NewPost(image,values.title,values.description)
        }}
        >
            {(props) => ( 
               <View>
                    {update &&
                    <View style={styles.loading}>
                      <ActivityIndicator size='large' color="#0000ff" />
                    </View>
                    } 
                  <Text style={styles.CT1}>Title</Text>
                 <TextInput
                  style = {global.CreateInput}
                  placeholder = 'Title'
                  onChangeText={props.handleChange('title')}
                  value={props.values.title}
                  />
                 <Text style={styles.CT1}>Add Image</Text>
                 <TouchableOpacity style = {global.multi2} onPress={() => {pickImage()}} > 
                        { image !== '' && 
                            <ImageBackground source={{ uri: image }} resizeMode= "contain" style = {{flex:1 , width: undefined, height: undefined}}/>
                          }
                            { image == '' && 
                            <ImageBackground source={{ uri: props.props.image? props.props.image : '' }} resizeMode= "cover" style = {{flex:1 , width: undefined, height: undefined}}/>}
                    </TouchableOpacity>
                 <Text style={styles.CT1}>Add Description</Text>
                 <TextInput
                     style = {global.multi}
                     placeholder = 'Description'
                     multiline={true}
                     numberOfLines = {4}
                     onChangeText={props.handleChange('description')}
                     value={props.values.description}
                 />
              <Button
              title="Add"
              iconContainerStyle = {global.BiconContainerStyle}
              titleStyle = {global.CtitleStyle}
              buttonStyle = {global.ButtonStyle2}
              containerStyle = {global.BcontainerStyle}
              onPress={props.handleSubmit}
              disabled = {update}
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


export default UpdatePostForm;


