// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTJiHVBk6lV1A_MCIp69TmcoQ61snGz5A",
  authDomain: "fvagito.firebaseapp.com",
  databaseURL:
    "https://fvagito-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fvagito",
  storageBucket: "fvagito.appspot.com",
  messagingSenderId: "978099693647",
  appId: "1:978099693647:web:b48a32928324888343623a",
  measurementId: "G-F5FXZ2S5Z9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
