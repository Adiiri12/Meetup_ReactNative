// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyB1hlhp3dlrp2BzavHEBGZgWBJ9U8tw4yA",
  authDomain: "volunteer-dddb5.firebaseapp.com",
  projectId: "volunteer-dddb5",
  storageBucket: "volunteer-dddb5.appspot.com",
  messagingSenderId: "893102568889",
  appId: "1:893102568889:web:3ebc37c150cb1dbd533268",
  measurementId: "G-T2G5C5Q40G"
});

// Initialize Firebase


export const auth = app.auth();
export const storage = app.storage();
export const firestore = app.firestore();
//export const database = app.database;


export default app;