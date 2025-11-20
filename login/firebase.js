// firebase.js — FIREBASE INITIALIZATION (MODULE VERSION)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2HSA-9mS520eGr2d8673r1Eft44-KkJw",
    authDomain: "olekasasi-mixed-day-secondary.firebaseapp.com",
    projectId: "olekasasi-mixed-day-secondary",
    storageBucket: "olekasasi-mixed-day-secondary.appspot.com",
    messagingSenderId: "1010905296142",
    appId: "1:1010905296142:web:dc72e1a675247737a3bb5f",
    measurementId: "G-7LB6ZVZ7GC"
};

// INIT APP
export const app = initializeApp(firebaseConfig);

// EXPORT SERVICES
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
