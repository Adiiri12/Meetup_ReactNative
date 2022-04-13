import React, { useState , useEffect } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity,TouchableWithoutFeedback, TouchableNativeFeedback,View, StyleSheet,Dimensions} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { FlatList } from 'react-native-gesture-handler';
import { Rows } from '../../Common/Themedata';
import { TextInput } from 'react-native-gesture-handler';
import { global } from '../../CSS/Styles';
import { Formik } from 'formik';
import { Zocial } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../firebase/AuthProvider';
import { auth, firestore , storage } from '../../firebase/firebase';
import { Follow } from '../../firebase/FollowingProvider';




const ThemeForm = () =>{
  const navigations = useNavigation();
  const {currentUser} = useAuth();
    //const [Row, setSelectedId] = useState(null);
    const [Row , setRows] = useState();
    const [data , setData] = useState([]);
    const [selected , setSelected] = useState(true);
    useEffect(() => {
      setRows(Rows);
      //console.log(Row);
    },[Row],selected,[data]);

    const Themes = async(Row) => {
      const db = firestore
      const batch = db.batch()

      Row.map((item) => {
        //console.log(item);
        batch.set(db.collection('themes').doc(currentUser.email).collection('theme').doc(item.name),item);
      })
      // Commit the batch
      return await batch.commit()
    }


    const handle = (id) =>{
      selected === true ? setSelected(false) : setSelected(true)

    Row.map((item)=>{if(item.id === id){
         if(item.selected === true){
           //setSelected(false)
           item.selected = false
         }
        
         else if(item.selected  === false){
           //setSelected(true)
           item.selected = true
           //setSelected(item.selected)
         }
         //console.log(Row)
         const copy = Row;
         setData(copy)
         //console.log(Row.selected);
         return [...Row]
       }
      }) 
    }
    return (
      <View style ={styles.container}>
          <Formik
          initialValues={{Code : ''}}
          onSubmit={(values) =>{
            //console.log(Row);
            console.log(...Row)
            //console.log(...Row)
            Themes(Row);
            Follow(currentUser.email)
            navigations.navigate(NavigationScreens.Login.name)
            
          }}
          >
              {(props) => (  
               <View>
                 <View style = {styles.boxContainer}>
                    <FlatList
                       
                        data = {Row}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        extraData =  {selected}
                        renderItem = {({item , index}) => {
                          //console.log(values);
                          // Row.map((item, index) =>  {
                          //   console.log(item);
                          // });
                            //const box = item.selected === true ? styles.TboxSize : styles.FboxSize
                            //onst Text = item.selected === true ? styles.FalseText : styles.TrueText

                            //console.log(item);
                            return (
                                <View style = {item.selected === false ? styles.FboxSize : styles.TboxSize}>
                                    <TouchableOpacity
                                      onPress={() => handle(item.id)}
                                    >
                                    <Text style = {item.selected === false ? styles.FalseText : styles.TrueText }>{item.name}</Text>
                                    </TouchableOpacity >
                                    
                                
                              </View>
                               
                            )
                        }}
                    />
                 </View>
                <Button
                title="Add"
                iconContainerStyle = {global.BiconContainerStyle}
                titleStyle = {global.CtitleStyle}
                buttonStyle = {global.ButtonStyle2}
                containerStyle = {styles.ButtonStyle}
                onPress={props.handleSubmit}
                />
             </View>
              )}
         </Formik> 
      </View>
    )
} 



const styles = StyleSheet.create({
    container:{
    //flex : 2,
    marginTop : 20,
    justifyContent : 'center',
    backgroundColor : '#FFFFFF',
    //height:height
    },
    boxContainer :{
      //flex : 2,
      marginTop : 20,
      flexDirection : 'row'
    },
    TboxSize : {
       flexDirection : 'row',
       marginTop : 20,
       marginLeft : 5,
       height : 40,
       width : '30%',
       borderWidth : 1,
       borderRadius : 10,
       borderColor : '#233975',
       alignItems : 'center',
       backgroundColor : 'white'
    },
    FboxSize : {
        flexDirection : 'row',
        marginTop : 20,
        marginLeft : 5,
        height : 40,
        width : '30%',
        borderWidth : 1,
        borderRadius : 10,
        borderColor : '#233975',
        alignItems : 'center',
        backgroundColor : '#233975'
     },
    TrueText:{
        //marginTop: 10,
        marginLeft : 15,
        alignContent : 'center',
        //textAlign : 'center',
        //fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: '600',
        color: "#233975"
     },
     FalseText:{
        //marginTop: 10,
        marginLeft : 15,
        alignContent : 'center',
        //textAlign : 'center',
        //fontFamily: "Montserrat",
        fontSize: 12,
        fontWeight: '600',
        color: "#FFFFFF"
     },
     ButtonStyle : {
        //marginTop : 90,
        //marginBottom : 30,

        width: 300,
        marginHorizontal: 50,
        marginVertical: 10,
        marginLeft: 20,
        marginTop : 80

     }

})

export default ThemeForm;

