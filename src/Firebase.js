// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Zc0CJqhtvnSBIi-vvKpF4ooubZXO9G8",
  authDomain: "reach-heaven-church.firebaseapp.com",
  projectId: "reach-heaven-church",
  storageBucket: "reach-heaven-church.appspot.com",
  messagingSenderId: "1096339867026",
  appId: "1:1096339867026:web:aafe9751ec5737fc186d4b",
  measurementId: "G-M9TSKGHN74",
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
export const analytics = getAnalytics(App);
export const auth = getAuth(App);
export const database = getDatabase(App);
