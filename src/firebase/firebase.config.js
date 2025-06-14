// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB066IMqP6nukML2Cc4QDYAxa-k82baW2o",
  authDomain: "ocean-of-game.firebaseapp.com",
  projectId: "ocean-of-game",
  storageBucket: "ocean-of-game.firebasestorage.app",
  messagingSenderId: "631247757875",
  appId: "1:631247757875:web:6fe74413661d5b2814f946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);