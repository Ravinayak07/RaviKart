// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9u-AWJG_oM1MZLmZRv0PqhgfAaUApDao",
  authDomain: "ravikartt.firebaseapp.com",
  projectId: "ravikartt",
  storageBucket: "ravikartt.appspot.com",
  messagingSenderId: "1044925637684",
  appId: "1:1044925637684:web:aa3bc61b4139babf925661",
  measurementId: "G-JTHEEMEHB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
