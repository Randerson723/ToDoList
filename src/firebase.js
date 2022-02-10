
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZEJiMcMfPPIDvvkxys_I1_6YCQEn0ZEY",
  authDomain: "todoist-1a069.firebaseapp.com",
  databaseURL: "https://todoist-1a069-default-rtdb.firebaseio.com",
  projectId: "todoist-1a069",
  storageBucket: "todoist-1a069.appspot.com",
  messagingSenderId: "498430215423",
  appId: "1:498430215423:web:7e2100b9a9c27cb7f2b8ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;