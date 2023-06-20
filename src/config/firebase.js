// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA9VP4eLilKohr8B7M42bH17N_Gf4dERQ",
  authDomain: "tiktok-clone-406a0.firebaseapp.com",
  projectId: "tiktok-clone-406a0",
  storageBucket: "tiktok-clone-406a0.appspot.com",
  messagingSenderId: "697876361515",
  appId: "1:697876361515:web:9b0e3b0d18f42304d3956e",
  measurementId: "G-RLW1V7VB8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;