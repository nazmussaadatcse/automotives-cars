// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZi1ki9_Zu-emqnoUDkHQyl-hBDR8H1ZM",
  authDomain: "auto-motives-cars.firebaseapp.com",
  projectId: "auto-motives-cars",
  storageBucket: "auto-motives-cars.appspot.com",
  messagingSenderId: "313455989069",
  appId: "1:313455989069:web:d6d736d65b1a67b888a704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;