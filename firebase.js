// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMZZrX0sgDCuygZcPV30XSJ7-6sOBlsj0",
  authDomain: "iot-project-61475.firebaseapp.com",
  projectId: "iot-project-61475",
  storageBucket: "iot-project-61475.firebasestorage.app",
  messagingSenderId: "459672298260",
  appId: "1:459672298260:web:3eadc44971c6f1a3049801",
  measurementId: "G-FJCR1STZRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
