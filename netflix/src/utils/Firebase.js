// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCRG_zWtC4jiCLqDefIHu62U7wiiPo30yg",
    authDomain: "react-netflix-app-78889.firebaseapp.com",
    projectId: "react-netflix-app-78889",
    storageBucket: "react-netflix-app-78889.appspot.com",
    messagingSenderId: "30951460149",
    appId: "1:30951460149:web:9d8c344147f3f4cf05907c",
    measurementId: "G-CNT0X7PNSN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);