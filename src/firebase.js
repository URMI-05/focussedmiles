import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyArkit1NMjcodWhcE3iLQIYUPX5xefuN5M",
  authDomain: "fmiles.firebaseapp.com",
  projectId: "fmiles",
  storageBucket: "fmiles.firebasestorage.app",
  messagingSenderId: "256384242173",
  appId: "1:256384242173:web:70b76011acda116d784994"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);