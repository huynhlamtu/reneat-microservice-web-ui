// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjnJ7FzNcMMU2E1CpBk6ozCtM_i6Y_b8I",
  authDomain: "insta-clone-29907.firebaseapp.com",
  projectId: "insta-clone-29907",
  storageBucket: "insta-clone-29907.appspot.com",
  messagingSenderId: "623292981642",
  appId: "1:623292981642:web:1cdcac4107f4a87557e873",
  measurementId: "G-88ZNNLWB1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const fireStore = getFirestore(app)
const fireStorage = getStorage(app)

export { app, auth, fireStore, fireStorage }