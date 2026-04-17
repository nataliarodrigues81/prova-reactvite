import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJEmpjnWmRZLnctF1UpuBGXuVVlVN3ssI",
  authDomain: "prova-bd-natalia.firebaseapp.com",
  projectId: "prova-bd-natalia",
  storageBucket: "prova-bd-natalia.firebasestorage.app",
  messagingSenderId: "1015820222921",
  appId: "1:1015820222921:web:874dcaa2b2b9005b552818"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);