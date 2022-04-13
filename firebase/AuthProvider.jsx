import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { useNavigation } from '@react-navigation/native';
import { NavigationScreens } from '../Common/NavigationTabs/navigation';
const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {
    //const navigations = useNavigation();
    const [currentUser, setCurrentUser] = useState(null);
  
    const [notLogedin, setLogedin] = useState(null);
    const [signedUp , setSignedUp] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const Login = () =>{
       return setLogedin(true);
    }
    const Logout = () =>{
        return setLogedin(false);
    }
    const signUp =  (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password).then(()=>{
            setLogedin(false)
        }).catch(error => { 
            console.log(error)
        })
    };
    const signIn = async (email, password) => {
       
    
        return auth.signInWithEmailAndPassword(email, password).then(()=>{
            setLogedin(true)
        }).catch(error => { 
            console.log(error)
        }).finally(() =>{
        })
       
    };
    const signOut = async () => {
        return auth.signOut().then(()=>{
            Logout();
        }).catch(error => { 
            alert(error) 
        });;
    };
    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    };
    const updateEmail = (email) => {
        return currentUser?.updateEmail(email);
    };
    const updatePassword = (password) => {
        return currentUser?.updatePassword(password);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
     
               if(user){
                setCurrentUser(user);
                setLoading(false);
                setSignedUp(true)
               }
          
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        setCurrentUser,
        notLogedin,
        signedUp,
        Login,
        Logout,
        signIn,
        signUp,
        signOut,
        resetPassword,
        updateEmail,
        updatePassword,
    };
    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);