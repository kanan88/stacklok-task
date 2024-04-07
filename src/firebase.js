// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "stacklok-task-2e77d.firebaseapp.com",
  projectId: "stacklok-task-2e77d",
  storageBucket: "stacklok-task-2e77d.appspot.com",
  messagingSenderId: "219826022980",
  appId: "1:219826022980:web:ca3cbd7685bf9341006a11",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
