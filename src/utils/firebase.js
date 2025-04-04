// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiMdiqRmiiBO2L3gPGFmeto4JTwj0DonY",
  authDomain: "stramify-gpt.firebaseapp.com",
  projectId: "stramify-gpt",
  storageBucket: "stramify-gpt.firebasestorage.app",
  messagingSenderId: "940381150054",
  appId: "1:940381150054:web:c544903a74a0fa27f246a7",
  measurementId: "G-Z7XY7WEYKG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();