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
       marginTop : 0
       //backgroundColor : 'red'
    },
    LoginText:{
        textAlign: 'left',
        marginTop: 40,
        marginLeft : 50,
        fontFamily: "Montserrat",
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    SignUpText:{
        textAlign: 'left',
        marginTop: 15,
        marginLeft : 10,
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "bold",
        color: "#000000"
    },
    BodyText:{
        textAlign: 'left',
        marginTop: 10,
        marginLeft : 50,
        fontFamily: "Montserrat",
        fontSize: 10,
        fontWeight: '300',
        color: "#FFFFFF"
    },
     SignText:{
        textAlign: 'left',
        marginTop: 20,
        marginLeft : 30,
        fontFamily: "Montserrat",
        fontSize: 10,
        fontWeight: '300',
        color: "#FFFFFF"
    },
    FormText:{
        textAlign: 'left',
        marginTop: 10,
        marginLeft : 35,
        fontFamily: "Montserrat",
        fontSize: 10,
        fontWeight: '300',
        color: 'white'
    },
    Sinput: {
        marginTop : 3,
        marginLeft : 25,
        width: 300,
        height: 35,
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15, 
        fontSize: 10,
        fontFamily: "Montserrat"
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
        fontFamily: "Montserrat",
    },
    ButtonStyle:{
         backgroundColor: '#FFFFFF',
         borderColor: 'transparent',
         borderWidth: 0,
         borderRadius: 30
    },
    BcontainerStyle:{
        width: 300,
         //marginHorizontal: 50,
         marginVertical: 10,
         marginLeft: 20,
         marginTop : 30
    },
    CtitleStyle:{ 
        fontWeight: '600',
        alignItems : 'center',
        marginRight : 10,
        color: '#FFFFFF',
        fontFamily: "Montserrat",
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
        fontFamily: "Montserrat",
    },
    AuttonStyle:{
        backgroundColor: 'white',
        borderColor: '#233975',
        borderWidth: 2,
        borderRadius: 30
        
   },
  });