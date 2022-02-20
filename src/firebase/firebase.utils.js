import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth'; 
import { Firestore } from 'firebase/firestore';
 const config = {
   apiKey: "AIzaSyCmvbe2FFKl_F-Blyzs6HyY8sONkeZBhxE",
   authDomain: "circle-shp.firebaseapp.com",
   projectId: "circle-shp",
   storageBucket: "circle-shp.appspot.com",
   messagingSenderId: "205821170287",
   appId: "1:205821170287:web:4001f57923146a9e8af39a"
 }

 firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

