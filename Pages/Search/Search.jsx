import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationTabs } from '../../Common/NavigationTabs/navigation';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-navigation'
import { Rows } from '../../Common/Themedata'
import { FlatList } from 'react-native-gesture-handler';

// const theme = useTheme();
// const styles = useStyles(theme);


const Search =  ({ navigation }) => {

const [Row , setRows] = useState();
const [data , setData] = useState([]);
const [selected , setSelected] = useState(true);

useEffect(() => {
  setRows(Rows);
  //console.log(Row);
},[Row],selected,[data]);

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
      <View style={styles.container}>
          <View style = {styles.Flatlistcontainer}>
          <FlatList
                       
                       data = {Row}
                       keyExtractor={item => item.id}
                       numColumns={2}
                       extraData =  {selected}
                       renderItem = {({item , index}) => {
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
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#FFFFFF'
      },
      Flatlistcontainer:{
        flex  : 1,
        marginTop : 5,
        justifyContent : 'center',
        backgroundColor : '#FFFFFF',
        //height:height
        },
      boxContainer :{
        flex : 1,
        marginTop : 20,
        flexDirection : 'row'
      },
      TboxSize : {
         flexDirection : 'row',
         marginTop : 20,
         marginLeft : 5,
         height : 100,
         width : '45%',
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
          height : 100,
         width : '45%',
          borderWidth : 1,
          borderRadius : 10,
          borderColor : '#233975',
          alignItems : 'center',
          backgroundColor : '#233975'
       },
      TrueText:{
          //marginTop: 10,
          marginLeft : 20,
          alignContent : 'center',
          //textAlign : 'center',
          //fontFamily: "Montserrat",
          fontSize: 14,
          fontWeight: '600',
          color: "#233975"
       },
       FalseText:{
          //marginTop: 10,
          marginLeft : 20,
          alignContent : 'center',
          //textAlign : 'center',
          //fontFamily: "Montserrat",
          fontSize: 14,
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
  });
  


export default Search;