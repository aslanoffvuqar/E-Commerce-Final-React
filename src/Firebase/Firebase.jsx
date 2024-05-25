// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9aMiwCpVmdiB3L7PMCtQQKjrVWTnK4nc",
  authDomain: "e-commerce-450cb.firebaseapp.com",
  projectId: "e-commerce-450cb",
  storageBucket: "e-commerce-450cb.appspot.com",
  messagingSenderId: "988068290161",
  appId: "1:988068290161:web:1cb4cabffbbe3f3d02c5d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
