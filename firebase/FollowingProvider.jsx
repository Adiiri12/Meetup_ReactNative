import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { useAuth } from '../firebase/AuthProvider';
import { firestore, storage , database} from './firebase';
import { updateDoc, serverTimestamp, snapshotEqual, querySnapshot } from "firebase/firestore";
import { doc, getDoc} from "firebase/firestore"; 
import '@firebase/firestore'



export const GetFollowers = async (currentUser_email) => {
    console.log(currentUser_email);
    return (await firestore.collection('Following').doc(currentUser_email).
    collection('userFollowing').get()
    ).docs.map((doc) => (
        { id: doc.id, ...doc.data()}));

}

export const Follow = async (currentUser_email , user_email) =>{

    return (await firestore.collection('Following').doc(`${currentUser_email}`).
    collection('userFollowing').doc(`${user_email}`).set({

    }) )
};

export const UnFollow = async (currentUser_email , user_email) =>{

    return (await firestore.collection('Following').doc(`${currentUser_email}`).
    collection('userFollowing').doc(`${user_email}`).delete())
};

export const checkFollower = async (currentUser_email,user_email) => {
    try{
    const userDocRef = firestore.collection('Following').doc(`${currentUser_email}`).collection('userFollowing').doc(`${user_email}`)
    const doc = await getDoc(userDocRef)
    if (!doc.exists()) {
        console.log(false)
        return false
      } else {
        console.log(true)
       return true
      }

    }catch(err){
        console.log(err)
    }

}
