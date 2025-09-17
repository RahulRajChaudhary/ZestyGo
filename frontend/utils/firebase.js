// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "zestygo-dab1a.firebaseapp.com",
  projectId: "zestygo-dab1a",
  storageBucket: "zestygo-dab1a.firebasestorage.app",
  messagingSenderId: "957702912002",
  appId: "1:957702912002:web:537e06e3ca9941ca860f1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { provider, auth }