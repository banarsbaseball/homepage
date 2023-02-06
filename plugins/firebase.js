// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { inject } from "vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrqAQd_qIsbocIp81f7TlQDn545uWKUFM",
  authDomain: "banars-baseball-hp.firebaseapp.com",
  databaseURL: "https://banars-baseball-hp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "banars-baseball-hp",
  storageBucket: "banars-baseball-hp.appspot.com",
  messagingSenderId: "1052381845098",
  appId: "1:1052381845098:web:d4b78874c27f2aed325c13",
  measurementId: "G-WC2RTSJTZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default (context, inject) => {
  inject('firebase', app)
}
