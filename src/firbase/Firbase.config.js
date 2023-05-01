// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ya9mvIRAeUePpUG7hIJaCQMtmeQG6Ds",
  authDomain: "the-news-dragon-dba66.firebaseapp.com",
  projectId: "the-news-dragon-dba66",
  storageBucket: "the-news-dragon-dba66.appspot.com",
  messagingSenderId: "687525904706",
  appId: "1:687525904706:web:a5ee6433b4e8dd9fd5c8db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;