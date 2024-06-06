// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc, getDocs, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpFthKScNp8zXGi7fmT3HeXP3Evn21c4w",
  authDomain: "diamondwarriorsbaseballleague.firebaseapp.com",
  projectId: "diamondwarriorsbaseballleague",
  storageBucket: "diamondwarriorsbaseballleague.appspot.com",
  messagingSenderId: "907132973772",
  appId: "1:907132973772:web:ab0b68b3242bb630bb4869",
  measurementId: "G-4SSE9XGMJH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, signOut, db, doc, getDoc, setDoc, updateDoc, getDocs, collection };