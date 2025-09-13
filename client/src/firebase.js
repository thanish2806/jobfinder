import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAU7y7i0_obkRDT_FsJSLzEm3UQ5gr8cEw",
  authDomain: "login-328db.firebaseapp.com",
  projectId: "login-328db",
  storageBucket: "login-328db.appspot.com",
  messagingSenderId: "797824241193",
  appId: "1:797824241193:web:df3ad3e2f273664eaed638",
  measurementId: "G-XXXXXXXXXX",  // <-- replace with your actual measurement ID if you use analytics
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
