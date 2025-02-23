import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4qUBR2RO4jGgAZGV5wTxGqOeAhD5NHLY",
  authDomain: "clone-92455.firebaseapp.com",
  projectId: "clone-92455",
  storageBucket: "clone-92455.appspot.com",
  messagingSenderId: "503237199698",
  appId: "1:503237199698:web:b09e2b5bac77a4410b5c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); 
export{db,auth,provider};