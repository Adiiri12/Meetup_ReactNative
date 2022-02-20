import React, { useState } from 'react'
import {KeyboardAvoidingViewBase, TouchableOpacity,TouchableWithoutFeedback, View, StyleSheet,Dimensions} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationScreens } from '../../Common/NavigationTabs/navigation';
import { useTheme } from 'react-navigation'
import { FlatList } from 'react-native-gesture-handler';
import { Rows } from '../../Common/Themedata';
import { TextInput } from 'react-native-gesture-handler';
import { global } from '../../CSS/Styles';
import { Formik } from 'formik';
import { Zocial } from '@expo/vector-icons';



const ThemeForm = () =>{
    //const [Row, setSelectedId] = useState(null);
    return (
      <View style ={styles.container}>
          <Formik
          initialValues={{Code : ''}}
          onSubmit={(values) =>{
          console.log(values);
          Rows.map((item, index) =>  {
            console.log(item);
          });
          }}
          >
              {(props) => (  
               <View>
                 <View style = {styles.boxContainer}>
                    <FlatList
                       
                        data = {Rows}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        //extraData={R}
                        renderItem = {({item}) => {
                            //const box = item.selected === true ? styles.TboxSize : styles.FboxSize
                            //onst Text = item.selected === true ? styles.FalseText : styles.TrueText

                            console.log(item.selected);
                            return (
                                <View style = {item.selected === 'true' ? styles.FboxSize : styles.TboxSize}>
                                    <TouchableOpacity
                                      onPress={() => item.selected === 'false' ? item.selected = 'true' : item.selected = 'false'}
                                    >
                                    <Text style = {item.selected === 'true' ? styles.FalseText : styles.TrueText }>{item.name}</Text>
                                    </TouchableOpacity >
                                    
                                
                              </View>
                               
                            )
                        }}
                    />
                 </View>
                <Button
                title="Skip "
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

