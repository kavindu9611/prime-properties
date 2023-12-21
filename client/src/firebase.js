// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prime-properties-838e0.firebaseapp.com",
  projectId: "prime-properties-838e0",
  storageBucket: "prime-properties-838e0.appspot.com",
  messagingSenderId: "488238284931",
  appId: "1:488238284931:web:42e981708648874253dbb6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
