import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { useAuth } from '../firebase/AuthProvider';
import { firestore, storage , database} from './firebase';
import { updateDoc, serverTimestamp , getDoc, onSnapshot} from "firebase/firestore";
import '@firebase/firestore'



const Jobs = storage.refFromURL('gs://volunteer-dddb5.appspot.com/Job');
//const timestamp = firestore.FieldValue.serverTimestamp;
//const {currentUser} = useAuth();



export const CreateJob = async (image,title,description,email) =>{

    if(image !== ''){
        const response = await fetch(image);
        const blob = await response.blob()
        const imageTaskSnapshot = await Jobs.child(`${email}/${Math.random().toString(36)}.jpg`).put(blob);
        const imageURL = imageTaskSnapshot.ref.getDownloadURL().then((imageURL) => {
        console.log(imageURL);
        return  firestore.collection('Post').doc(`${email}`)
        .collection('userPost')
        .add({
            title,
            description,
            imageURL,
            email,
            createdAt: serverTimestamp()
        }
        );
      }).catch((e)=>{
          console.log(e)
      })}else{
        return  firestore.collection('Post').doc(`${email}`)
        .collection('userPost')
        .add({
            title,
            description,
            image,
            email,
            createdAt: serverTimestamp()
        }
        );
    
      }
    };


export const getUserJob = async (email_address) => {
    
    console.log(email_address);
    return (await firestore.collection('Job').doc(email_address)
    .collection('userPost').orderBy('createdAt','asc').get()
    ).docs.map((doc) => ({ ...{ id: doc.id }, ...doc.data()}));

}



export const getAllJobs = async (email_address) => {
    let array = []
    console.log(email_address);
    const post = await firestore.collection('Job').doc(email_address)
    .collection('userPost').orderBy('createdAt','asc').get().then((snapshot) =>{
    
        snapshot.forEach((doc) =>{
            //console.log(doc.data())
            array.push({
                key: doc.id,
                Post: doc.data()
            })
            console.log(array)
        })
    })

}

export const deleteJob = (Jobid, email) =>{

   return firestore.collection('Job').doc(email)
    .collection('userPost').doc(Jobid).delete();
}


 