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
import { UpdateUser , getUserbyEmail } from '../../firebase/UserProvider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UpdateAccountForm = (props) =>{

  const navigations = useNavigation();
  const {currentUser} = useAuth();
  const [email, setEmail] = useState (currentUser.email);
  const [account_name , setAccount] = useState('');
  const [image, setImage] = useState('');
  
  const [user, setUsers] = useState([]);
  const [loadinguUsers, setLoadinguUsers] = useState(false);
  const [update , setUpdate] = useState(false)

    useEffect(() => {
        loadinguUser();
        //setAccount(user.bio);

    },[])

    
    const loadinguUser = async () => {
        try {
            setLoadinguUsers(true);
            const users = await getUserbyEmail(email);
            setUsers(users)
            //setImage(users.imageURL)
            //console.log(user)
        } catch (err) {
           console.log(err)
        } finally {
            setLoadinguUsers(false);
        }
    };

   const UpdateUsers = async(image, account_name , bio) =>{
        setUpdate(true);
        const updating = await UpdateUser(image,account_name,bio,user.first_name,user.last_name,currentUser.uid,email)
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
            account_name : user.account_name, 
            bio : user.bio
        }}
        onSubmit={(values) =>{
        //values.Account_name ===  '' ? values.Account_name = user.bio : values.Account_name = values.Account_name;
        //console.log(values)
        //onsole.log(values.account_name);
        console.log(values.bio);
        UpdateUsers(image,values.account_name,values.bio)
        //console.log(currentUser.uid)
        }
    }
        >
            {(props) => (
               <View>
                    {update &&
                    <View style={styles.loading}>
                      <ActivityIndicator size='large' color="#0000ff" />
                    </View>
                    } 
                   <View style = {{flexDirection : 'row'}}>
                       <Text style = {styles.advance}>Advance details (email & password) :</Text>
                       <TouchableOpacity>
                       <Icon
                        type="ionicon"
                        name="chevron-forward-circle" 
                        color="#233975"
                        size = '30'
                        style={{ marginLeft : 80 , marginTop : -4}}
                       />
                    </TouchableOpacity>
                   </View>
                  <Text style={styles.CT1}>Display Picture : </Text>
                  <TouchableOpacity
                  onPress={() => {pickImage()}}
                  >
                { image == '' && 
                  <Avatar.Image size={70} style = {{alignSelf : 'center' , paddingBottom : -8}}source={{uri : user.imageURL}} disabled ={update} colour = {'black'}/>
                  }
                { image != '' && 
                  <Avatar.Image size={70} style = {{alignSelf : 'center' , paddingBottom : -8}}source={{uri : image }} disabled ={update} colour = {'black'}/>
                  }
                  </TouchableOpacity>
                  <Text style={styles.CTs}>Account_name</Text>
                 <TextInput
                  style = {global.CreateInput}
                  //placeholder = {user.account_name}
                  placeholderTextColor= 'black'
                  onChangeText={props.handleChange('account_name')}
                  value={props.values.account_name}
                  disabled = {update}
                 />
                <Text style={styles.CTs}>Bio</Text>
                  <TextInput
                  style = {global.multi}
                  placeholder = {user.bio}
                  placeholderTextColor= 'black'
                  multiline={true}
                  numberOfLines = {4}
                  onChangeText={props.handleChange('bio')}
                  value={props.values.bio}
                 />
              <Button
              title="Update"
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
        marginLeft : 10,
        //fontFamily: "monospace",
        fontSize : 14,
        fontWeight: '300',
        color : '#233975'
    },
    CT1:{
        textAlign: 'left',
        marginTop: 20,
        marginBottom : 10,
        //marginLeft : 40,
        alignSelf : 'center',
        fontSize : 14,
        fontWeight: '300',
        color : '#233975'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})


export default UpdateAccountForm;


