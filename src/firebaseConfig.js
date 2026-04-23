import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDjki3RUYCqcKE-85sTGDjvuK-nNGrVN9s",
  authDomain: "jhinfitness.firebaseapp.com",
  projectId: "jhinfitness",
  storageBucket: "jhinfitness.firebasestorage.app",
  messagingSenderId: "341753991950",
  appId: "1:341753991950:web:8f682929dd743e8d7b7d5f",
  measurementId: "G-RCDMT9LG2H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;
