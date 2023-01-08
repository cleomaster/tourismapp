// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD859VslxoAlZf5SarL8vK9I7fbi_mChts",
  authDomain: "uniproject-56b90.firebaseapp.com",
  projectId: "uniproject-56b90",
  storageBucket: "uniproject-56b90.appspot.com",
  messagingSenderId: "639038261699",
  appId: "1:639038261699:web:b01699073419215f189576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const GOOGLE_API_KEY = "AIzaSyDW_LLBiRcp_SxJmPsB-HNV5E9vqGrI-L8";