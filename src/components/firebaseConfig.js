// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu7KtJlbNI7vpQJ0E8EwX-f5iPM0Te-UI",
  authDomain: "influer-7b443.firebaseapp.com",
  projectId: "influer-7b443",
  storageBucket: "influer-7b443.firebasestorage.app",
  messagingSenderId: "1046702764817",
  appId: "1:1046702764817:web:df1254cc30e03c60ea52b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;