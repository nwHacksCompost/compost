// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
  const analytics = getAnalytics(app);