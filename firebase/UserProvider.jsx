import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { firestore, storage } from './firebase';

// User DATA DEFINITION:
// First_name: name of user
// Second_name: second name of plant
// Account_name = user account name
// user id = user id given by the database
// email address = email address used to sign with
// bio = user description of him/her sel
// lastWater: DateTime/Timestamp of when last watered
// imageURL: URL pointing to image in firebase storage

const Userprofile = storage.refFromURL('gs://volunteer-dddb5.appspot.com/userProfile');

const [currentUser, setCurrentUser] = useState(null);

export const image = async (user) => {
    const response = await fetch(result.uri);
    const blob = await response.blob()
    const imageTaskSnapshot = await Userprofile.child(`/userProfile/ ${currentUser.uid}`).put(blob);
    const imageURL = await imageTaskSnapshot.ref.getDownloadURL();
    return await firestore.collection('Plants').add(plant);
};

 export const CreateUser = async (account_name , first_name , last_name , bio , DisplayImage,user) =>{

    return await firestore
    .collection('user')
    .doc(currentUser.email)
    .add({
        account_name,
        bio,
        DisplayImage,
        first_name,
        last_name,
        user,
    })
};

