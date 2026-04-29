// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC653ySMWuVHhartmJnWv18fpLCNTK-HMM",
  authDomain: "my-lms-11c33.firebaseapp.com",
  projectId: "my-lms-11c33",
  storageBucket: "my-lms-11c33.firebasestorage.app",
  messagingSenderId: "564902508556",
  appId: "1:564902508556:web:fe4ed6da9859b2d5f91629",
  measurementId: "G-4EDFNBKZL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreConfig = getFirestore(app);
const analytics = getAnalytics(app);

export { firestoreConfig };
