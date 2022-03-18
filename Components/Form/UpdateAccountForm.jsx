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
import { UpdateUser , getUserbyEmail } from '../../firebase/UserProvider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UpdateAccountForm = (props) =>{

  const navigations = useNavigation();
  const {currentUser} = useAuth();
  const [email, setEmail] = useState (currentUser.email);
  const [account_name , setAccount] = useState('');
  
  const [user, setUsers] = useState([]);
    const [loadinguUsers, setLoadinguUsers] = useState(false);

    useEffect(() => {
        loadinguUser();
        setAccount(user.bio)
    },[])

    
    const loadinguUser = async () => {
        try {
            setLoadinguUsers(true);
            const users = await getUserbyEmail(email);
            setUsers(users)
            console.log(user)
        } catch (err) {
           console.log(err)
        } finally {
            setLoadinguUsers(false);
        }
    };

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
        }}
        onSubmit={(values) =>{
        //values.Account_name ===  '' ? values.Account_name = user.bio : values.Account_name = values.Account_name;
        console.log(values)
        console.log(values.account_name);
        //UpdateUser(image,props.Account_name,props.First_name,props.Second_name,values.Bio,currentUser.uid,email)
        }}
        >
            {(props) => ( 
               <View>
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
                  onPress={() => {console.log('works')}}
                  >
                { user.imageURL !== '' && 
                  <Avatar.Image size={70} style = {{alignSelf : 'center' , paddingBottom : -8}}source={{uri : user.imageURL}} colour = {'black'}/>
                  }
                { user.imageURL == '' && 
                  <Avatar.Image size={70} style = {{alignSelf : 'center' , paddingBottom : -8}}source={require('../../assets/Avatar_Dark.png')} colour = {'black'}/>
                  }
                  </TouchableOpacity>
                  <Text style={styles.CTs}>Account_name</Text>
                 <TextInput
                  style = {global.CreateInput}
                  //placeholder = {user.account_name}
                  placeholderTextColor= 'black'
                  onChangeText={props.handleChange('account_name')}
                  value={props.values.account_name}
                 />
                <Text style={styles.CTs}>Bio</Text>
                  <TextInput
                  style = {global.multi}
                  placeholder = {user.bio}
                  placeholderTextColor= 'black'
                  multiline={true}
                  numberOfLines = {4}
                  onChangeText={props.handleChange('Bio')}
                  value={props.values.Bio}
                 />
              <Button
              title="Update"
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
})


export default UpdateAccountForm;


