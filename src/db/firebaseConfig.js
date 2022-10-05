import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9zaeFPWm91sTnq4ZqJGwMTpm-mA6EyrM",
  authDomain: "fastchicken-f46f0.firebaseapp.com",
  projectId: "fastchicken-f46f0",
  storageBucket: "fastchicken-f46f0.appspot.com",
  messagingSenderId: "571983363320",
  appId: "1:571983363320:web:15f6e9987a622104254f0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;