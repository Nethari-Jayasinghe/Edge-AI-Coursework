// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAIZ40Ce8-36xcPvVVZ_ibijzh0N9ilDZc",
  authDomain: "edge-ai-cw.firebaseapp.com",
  databaseURL: "https://edge-ai-cw-default-rtdb.firebaseio.com",
  projectId: "edge-ai-cw",
  storageBucket: "edge-ai-cw.appspot.com",
  messagingSenderId: "984457331869",
  appId: "1:984457331869:web:e4f4534799dd4e6d848074",
  measurementId: "G-MJBC5M8KH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

const provider = new GoogleAuthProvider();
export { provider };
