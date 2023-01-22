// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFhOwU7mqPD6SmP0B5kieqQXmytxQrQuI",
  authDomain: "compostdb.firebaseapp.com",
  projectId: "compostdb",
  storageBucket: "compostdb.appspot.com",
  messagingSenderId: "410902546251",
  appId: "1:410902546251:web:76119da58881b4ac81cace",
  measurementId: "G-CH56HKQKNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//collection ref
const colRef = collection(db, 'recipes')

//get collections
getDocs(colRef)
.then((snapshot) => {
    console.log(snapshot.docs)
  })


export { app, db, collection, getDocs, Timestamp, addDoc };
export { query, orderBy, limit, where, onSnapshot };