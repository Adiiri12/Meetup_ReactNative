import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [NotSignedUp, setNotSignedUp] = useState(false);

    const [notLogedin, setLogedin] = useState(false);

    const [loading, setLoading] = useState(false);
    
    const Login = () =>{
       return setLogedin(true);
    }
    const Logout = () =>{
        return setLogedin(false);
    }
    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };
    const signIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };
    const signOut = () => {
        return auth.signOut();
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
     
                setCurrentUser(user);
                setLoading(false);
          
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        notLogedin,
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