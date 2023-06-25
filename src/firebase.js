// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGJImQ7CrGtqZWrt4xa_vntTe2Jh0EJUI",
  authDomain: "ravikart-f578b.firebaseapp.com",
  projectId: "ravikart-f578b",
  storageBucket: "ravikart-f578b.appspot.com",
  messagingSenderId: "528104563692",
  appId: "1:528104563692:web:c04372402c4a0fb7fa16c9",
  measurementId: "G-ZC1PE43MGB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
