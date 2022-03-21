import { initializeApp } from 'firebase/app';
import { getAuth } from  "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const app = initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyD2gahjFCTyqOWk0aEcXQmZd5brrOODz6s",
    authDomain: "ecommerce-a9e77.firebaseapp.com",
    projectId: "ecommerce-a9e77",
    storageBucket: "ecommerce-a9e77.appspot.com",
    messagingSenderId: "303562284226",
    appId: "1:303562284226:web:14fe79e859f23e855d2f5b"
})


export const auth = getAuth(app)

export const db = getFirestore(app)

export const storage = getStorage(app);

export default app

