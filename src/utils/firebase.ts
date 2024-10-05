// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBch4zbt61O3swcJYM8PX5YBRHi-mbAb6w",
//   authDomain: "design-elementary-1.firebaseapp.com",
//   projectId: "design-elementary-1",
//   storageBucket: "design-elementary-1.appspot.com",
//   messagingSenderId: "374287691071",
//   appId: "1:374287691071:web:b3408b69e2999530bc778a",
//   measurementId: "G-M889YPXZ4Z"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD1r9ZwwE_Ny-3z0KjgZnyakRA54fo6mkY",
  authDomain: "design-elementary-2.firebaseapp.com",
  projectId: "design-elementary-2",
  storageBucket: "design-elementary-2.appspot.com",
  messagingSenderId: "58351340444",
  appId: "1:58351340444:web:28bba703e0dd88f3d19659",
  measurementId: "G-CDH75YGGMJ"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, firestore, storage, firebaseConfig, auth, googleProvider };
