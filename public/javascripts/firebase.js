// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBEpD5yK4jrXbfd8xhmgPZ6PfmglWzrF4",
  authDomain: "fir-bb453.firebaseapp.com",
  projectId: "fir-bb453",
  storageBucket: "fir-bb453.appspot.com",
  messagingSenderId: "549643124900",
  appId: "1:549643124900:web:9ee93522bd90e2a423e631",
  measurementId: "G-NQH3DLQD49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);