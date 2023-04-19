// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDktyQ4VYpkGn4rxR06tJx29Wi3bOnXmHY",
  authDomain: "listed-4b18b.firebaseapp.com",
  projectId: "listed-4b18b",
  storageBucket: "listed-4b18b.appspot.com",
  messagingSenderId: "691980776477",
  appId: "1:691980776477:web:9a5ef482f1f39466cd42f4",
  measurementId: "G-VTVCC8RP6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth,provider};