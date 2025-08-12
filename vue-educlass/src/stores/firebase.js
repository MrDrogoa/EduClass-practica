// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUu0zzwCdEs2E_QTu_xAcYAF-2C6mj6a4",
  authDomain: "login-y-dash.firebaseapp.com",
  projectId: "login-y-dash",
  storageBucket: "login-y-dash.firebasestorage.app",
  messagingSenderId: "728199612706",
  appId: "1:728199612706:web:dc8ca06f23b5dbc3b43d7b",
  measurementId: "G-FBFRRB24EF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
