// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLb6DvYDGuWlPpp6uPx0MaZ5vU3MPPKro",
  authDomain: "urban-bazaar-21f1a.firebaseapp.com",
  projectId: "urban-bazaar-21f1a",
  storageBucket: "urban-bazaar-21f1a.firebasestorage.app",
  messagingSenderId: "165950442932",
  appId: "1:165950442932:web:b74e6e920b8fe39ac776e1",
  measurementId: "G-K8RS9PXTSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)