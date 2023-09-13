// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzxzW3yq9gx05_P6h4E6l0uENyHa0koF0",
  authDomain: "qrvoyant.firebaseapp.com",
  projectId: "qrvoyant",
  storageBucket: "qrvoyant.appspot.com",
  messagingSenderId: "1000333784340",
  appId: "1:1000333784340:web:8e62ee6a3fffbc9986fe01",
  measurementId: "G-WYELD72LJX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
