import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { useAuth } from '../firebase/AuthProvider';
import { firestore, storage } from './firebase';

// User DATA DEFINITION:
// First name: name of user
// Second_name: second name of plant
// Account_name = user account name
// user id = user id given by the database
// email address = email address used to sign with
// bio = user description of him/her self
// DislayImage: URL pointing to image in firebase storage

const Userprofile = storage.refFromURL('gs://volunteer-dddb5.appspot.com/userProfile');
//const {currentUser} = useAuth();

export const CreateUser = async (image,account_name,bio,first_name,last_name,user,email) =>{
    const response = await fetch(image);
    const blob = await response.blob()
    const imageTaskSnapshot = await Userprofile.child(`${user}.jpg`).put(blob);
    const imageURL = imageTaskSnapshot.ref.getDownloadURL().then((imageURL) => {
    console.log(imageURL);
    return  firestore.collection('user').doc(`${email}`).set({
        account_name,bio,imageURL,first_name,last_name}
    );
  })
};

export const getUserbyEmail = async(email_address) => {
    console.log(email_address)
    return (await firestore.collection('user').doc(email_address).get()).data();
};


export const UpdateUser = async (image,account_name,bio,first_name,last_name,user,email) =>{
    const response = await fetch(image);
    const blob = await response.blob()
    const imageTaskSnapshot = await Userprofile.child(`${user}.jpg`).put(blob);
    const imageURL = imageTaskSnapshot.ref.getDownloadURL().then((imageURL) => {
    console.log(imageURL);
    return  firestore.collection('user').doc(`${email}`).update({
        account_name,bio,imageURL,first_name,last_name}
    );
  })
};
