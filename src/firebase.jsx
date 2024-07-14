import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-ui-29136.firebaseapp.com",
  projectId: "admin-ui-29136",
  storageBucket: "admin-ui-29136.appspot.com",
  messagingSenderId: "23897987331",
  appId: "1:23897987331:web:c375ede621e789426bb136",
  // measurementId: "G-NQZ454GXEB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage (app);