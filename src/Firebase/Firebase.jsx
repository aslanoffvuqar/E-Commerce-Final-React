// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCISI2aO6xv5cZxJnusGITuVMTWX42XJJI",
  authDomain: "e-commerce-final-20598.firebaseapp.com",
  projectId: "e-commerce-final-20598",
  storageBucket: "e-commerce-final-20598.appspot.com",
  messagingSenderId: "203829064025",
  appId: "1:203829064025:web:34940ece0610a3969b1c48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app)
export { auth }
export const storage = getStorage(app)