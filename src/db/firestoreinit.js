// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6gW9iNmw_sSoDzP5qZ6XmgVZ5gT_kOhU",
  authDomain: "photo-folio-d67eb.firebaseapp.com",
  projectId: "photo-folio-d67eb",
  storageBucket: "photo-folio-d67eb.appspot.com",
  messagingSenderId: "838498848718",
  appId: "1:838498848718:web:543b012769aabf097b659f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);