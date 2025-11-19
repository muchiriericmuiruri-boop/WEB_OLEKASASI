// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD2HSA-9mS520eGr2d8673r1Eft44-KkJw",
  authDomain: "olekasasi-mixed-day-secondary.firebaseapp.com",
  projectId: "olekasasi-mixed-day-secondary",
  storageBucket: "olekasasi-mixed-day-secondary.appspot.com",
  messagingSenderId: "1010905296142",
  appId: "1:1010905296142:web:dc72e1a675247737a3bb5f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
