import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Screencontainer:{
        flex : 1,
        flexDirection : 'column',
        //alignItems: 'center',
        //justifyContent: 'center',
        
    },
    Logincontainer:{
        flex : 2,
        justifyContent : 'center',
        backgroundColor : '#233975',
        //height:height

        
    },
    SignupContainer:{
        flex : 2,
        justifyContent : 'center',
        backgroundColor : '#FFFFFF',
        marginBottom : -40
        //flexDirection:'column',
        //height:height
        
    },
    SigninContainer : {
       flex : 2,
       marginTop : 30
    },
    SignUpBox : {
        flex : 2,
        //marginBottom : 30 

    },
    Form :{
       flex : 1,
       marginTop : 0,
       //marginBottom : 60
       //backgroundColor : 'red'
    },
    LoginText:{
        textAlign: 'left',
        marginTop: 40,
        marginLeft : 50,
        //fontFamily: "Montserrat",
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    SignUpText:{
        textAlign: 'left',
        marginTop: 15,
        marginLeft : 10,
        //fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "bold",
        color: "#000000"
    },
    BodyText:{
        textAlign: 'left',
        marginTop: 10,
        marginLeft : 50,
        //fontFamily: "Montserrat",
        fontSize: 10,
        fontWeight: '300',
        color: "#FFFFFF"
    },
     SignText:{
        textAlign: 'left',
        marginTop: 20,
        marginLeft : 30,
        //fontFamily: "Montserrat",
        fontSize: 10,
        fontWeight: '300',
        color: "#FFFFFF"
    },
    FormText:{
        textAlign: 'left',
        marginTop: 10,
        marginLeft : 35,
        //fontFamily: "Montserrat",
        fontSize: 10,
        fontWeight: '300',
        color: 'white'
    },
    Sinput: {
        marginTop : 3,
        marginLeft : 25,
        width: 300,
        height: 40,
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth:1,
        borderRadius: 15, 
        fontSize: 10,
        //fontFamily: "Montserrat"
    },
    BiconContainerStyle:{ 
        //marginRight: 10,
        marginTop : 5
    },
    BtitleStyle:{ 
        fontWeight: '600',
        alignItems : 'center',
        marginRight : 10,
        color: '#233975',
        //fontFamily: "Montserrat",
    },
    ButtonStyle:{
         backgroundColor: '#FFFFFF',
         borderColor: 'transparent',
         borderWidth: 0,
         borderRadius: 30
    },
    BcontainerStyle:{
        marginTop : 20,
        marginBottom : 20,
        width: 300,
         marginHorizontal: 50,
         marginVertical: 10,
         marginLeft: 20,
         marginTop : 30
    },
    CtitleStyle:{ 
        fontWeight: '600',
        alignItems : 'center',
        marginRight : 10,
        color: '#FFFFFF',
        //fontFamily: "Montserrat",
    },
    CuttonStyle:{
         backgroundColor: '#233975',
         borderColor: 'transparent',
         borderWidth: 0,
         borderRadius: 30
    },
    AtitleStyle:{ 
        fontWeight: '600',
        alignItems : 'center',
        marginRight : 10,
        color: '#233975',
        //fontFamily: "Montserrat",
    },
    AuttonStyle:{
        backgroundColor: 'white',
        borderColor: '#233975',
        borderWidth: 2,
        borderRadius: 30
        
   },
   CreateText:{
    textAlign: 'left',
    marginTop: 15,
    marginLeft : 30,
    //fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: "bold",
    color: "#233975"
},
CreateInput: {
    marginTop : 3,
    marginLeft : 25,
    width: 300,
    height: 40,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderBottomWidth: 2,
    fontSize: 10,
    //fontFamily: "Montserrat"
},
StepText:{
    textAlign: 'left',
    marginTop: -30,
    marginLeft : 30,
    //fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: '300',
    color: "#233975"
},
SText:{
    textAlign: 'left',
    marginTop: 70,
    marginLeft : 30,
    //fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: '300',
    color: "#233975"
},
CTs:{
    textAlign: 'left',
    marginTop: 20,
    marginBottom : 5,
    marginLeft : 40,
    //fontFamily: "monospace",
    fontSize: 12,
    fontWeight: '300',
    color : '#233975'
},
ButtonStyle2:{
    backgroundColor: '#233975',
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 30
},
CreateContainer:{
    //flex : 2,
    marginTop : 30,
    justifyContent : 'center',
    backgroundColor : '#FFFFFF',
    //height:height
},
CtitleStyle:{ 
    fontWeight: '600',
    alignItems : 'center',
    marginRight : 10,
    color: '#FFFFFF',
    //fontFamily: "Montserrat",
    fontSize : 16
},
image: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: '#233975',
    marginLeft : -40,
    alignSelf : 'center',
    backgroundColor : '#e4e6e7'
    //resizeMode: 'contain'
  },
  multi: {
    marginTop : 3,
    marginLeft : 25,
    width: 300,
    height: 150,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    paddingTop:  20,
    borderColor: '#233975',
    borderWidth:1,
    borderRadius: 15, 
    fontSize: 10,
    textAlignVertical : "top" 
    //fontFamily: "Montserrat"
},
skip:{
    // textAlign: 'left',
    marginTop: 25,
    // marginLeft : 50,
    //fontFamily: "Montserrat",
    marginLeft : 138,
    fontSize: 14,
    fontWeight: "400",
    color: "#233975"
},
  });