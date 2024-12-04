// Import SDK từ Firebase JS SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCRhcal5v53S4eM6jtWib8-aocuLr109Ec",
  authDomain: "firstrn-92995.firebaseapp.com",
  projectId: "firstrn-92995",
  storageBucket: "firstrn-92995.firebasestorage.app",
  messagingSenderId: "987173970557",
  appId: "1:987173970557:web:fbfaedf16d61661bf64714",
  measurementId: "G-0C5TQMKEEM",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);