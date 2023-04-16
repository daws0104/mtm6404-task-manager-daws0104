// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdj5KOPLh6cqmubiyPU4feDulqBwK4MZg",
  authDomain: "taskmanager-27f63.firebaseapp.com",
  projectId: "taskmanager-27f63",
  storageBucket: "taskmanager-27f63.appspot.com",
  messagingSenderId: "958905890576",
  appId: "1:958905890576:web:0de0c77fed0a51d16c1795",
  measurementId: "G-WQ242SM0CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db