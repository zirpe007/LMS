import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
//   authDomain: "educational-courses-37a16.firebaseapp.com",
//   projectId: "educational-courses-37a16",
//   storageBucket: "educational-courses-37a16.appspot.com",
//   messagingSenderId: "187143367568",
//   appId: "1:187143367568:web:a010dfcb5793a9d8e1e115",
//   measurementId: "G-WPHMZ0FS66"
// };
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "lmsai-84e46.firebaseapp.com",
  projectId: "lmsai-84e46",
  storageBucket: "lmsai-84e46.firebasestorage.app",
  messagingSenderId: "901793897214",
  appId: "1:901793897214:web:b5b28bc5f2e3847a9c23af",
  measurementId: "G-85QMBGWQYQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}