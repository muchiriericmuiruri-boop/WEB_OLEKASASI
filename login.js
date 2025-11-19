// Firebase Imports (from CDN)
import { 
  initializeApp 
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { 
  getAuth, signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyD2HSA-9mS520eGr2d8673r1Eft44-KkJw",
    authDomain: "olekasasi-mixed-day-secondary.firebaseapp.com",
    projectId: "olekasasi-mixed-day-secondary",
    storageBucket: "olekasasi-mixed-day-secondary.firebasestorage.app",
    messagingSenderId: "1010905296142",
    appId: "1:1010905296142:web:dc72e1a675247737a3bb5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("loginMessage");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;

          message.style.color = "lime";
          message.textContent = "Login successful! Redirecting...";

          // redirect based on role
          if (email === "samuelmusyoki@school.com") {
              window.location.href = "admin-official.html";
          }
      })
      .catch((error) => {
          message.style.color = "red";
          message.textContent = "Invalid username or password";
      });

});
