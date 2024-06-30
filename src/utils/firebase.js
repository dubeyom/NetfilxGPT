// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgBQJn2PA5dGdweUla_-E0v9Kvl6aITaw",
  authDomain: "netflix-gpt-b5051.firebaseapp.com",
  projectId: "netflix-gpt-b5051",
  storageBucket: "netflix-gpt-b5051.appspot.com",
  messagingSenderId: "978984338064",
  appId: "1:978984338064:web:b03ec4a4428dcfa6ee0e15",
  measurementId: "G-YP2HP5BSWW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
