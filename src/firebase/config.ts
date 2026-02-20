//Aquí va la conexión a Firebase y la configuración necesaria para que funcione correctamente.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8dqZa56z9uvvLZcY1ozYTbBe1Vgpt4i8",
  authDomain: "react-proyecto-8e194.firebaseapp.com",
  projectId: "react-proyecto-8e194",
  storageBucket: "react-proyecto-8e194.firebasestorage.app",
  messagingSenderId: "942519537785",
  appId: "1:942519537785:web:ae01444c257f78054244a8",
  measurementId: "G-MEWZXX500V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);

