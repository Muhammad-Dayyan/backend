// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiYbkmJ7VZOG9wShS8Fod8wCaNnlgt4Oo",
  authDomain: "react-firebas-3a7b6.firebaseapp.com",
  projectId: "react-firebas-3a7b6",
  storageBucket: "react-firebas-3a7b6.appspot.com",
  messagingSenderId: "1062441797560",
  appId: "1:1062441797560:web:ff9b4e7293bb79cb20f14d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
const db = getFirestore(app);
export { app, db, auth };
console.log(db)
const auth = getAuth(app);
console.log(auth)