// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // 👈 add this
// import { getDatabase } from "firebase/database"; // 👈 add this if you need Realtime Database
// import { getFirestore } from "firebase/firestore"; // 👈 add this if you need Firestor
// import { getFunctions } from "firebase/functions"; // 👈 add this if you need Cloud Functions
// import { getPerformance } from "firebase/performance"; // 👈 add this if you need Performance Monitorin
// import { getRemoteConfig } from "firebase/remote-config"; // 👈 add this if you need Remote Config
// import { getMessaging } from "firebase/messaging"; // 👈 add this if you need Cloud Messaging
// import { getAppCheck } from "firebase/app-check"; // 👈 add this if you need App Check
// import { getFirestore } from "firebase/firestore"; // 👈 add this if you need Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBhCaX9zoCp5c1fcjw1GMsEWF7V-xWQSsk",
//   authDomain: "react-48718.firebaseapp.com",
//   projectId: "react-48718",
//   storageBucket: "react-48718.firebasestorage.app",
//   messagingSenderId: "98906049481",
//   appId: "1:98906049481:web:d34dbdd5d25eea8b143618",
//   measurementId: "G-3N5HPXPJ94"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBkwIbq8qyZxCHTZDSrwnGMBk0HFurylT8",
  authDomain: "dispodoc-2147d.firebaseapp.com",
  databaseURL: "https://dispodoc-2147d-default-rtdb.firebaseio.com",
  projectId: "dispodoc-2147d",
  storageBucket: "dispodoc-2147d.firebasestorage.app",
  messagingSenderId: "635454433654",
  appId: "1:635454433654:web:bb4825a30f5a2a020eb257",
  measurementId: "G-2N6X0KZ5LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // 👈 add this
export default app;