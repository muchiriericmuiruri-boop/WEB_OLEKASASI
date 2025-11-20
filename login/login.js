import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// ---- ADMIN LOGIN SETTINGS ----
const adminEmail = "samuelmusyoki@school.com"; 
const adminPassword = "315573301031871"; 
const adminPage = "../admin/index.html";  // <-- Your admin main page
// -------------------------------------

export async function loginUser() {
    const email = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    const loginMessage = document.getElementById("loginMessage");
    const loginSuccess = document.getElementById("loginSuccess");

    loginMessage.style.display = "none";
    loginSuccess.style.display = "none";

    if (!email || !password) {
        loginMessage.style.display = "block";
        loginMessage.textContent = "Please enter email and password.";
        return;
    }

    // Validate admin login
    if (email !== adminEmail || password !== adminPassword) {
        loginMessage.style.display = "block";
        loginMessage.textContent = "Incorrect admin username or password.";
        return;
    }

    try {
        // Firebase authentication
        await signInWithEmailAndPassword(auth, adminEmail, adminPassword);

        loginSuccess.style.display = "block";
        loginSuccess.textContent = "Login successful! Redirecting...";

        window.location.href = adminPage;

    } catch (error) {
        loginMessage.style.display = "block";
        loginMessage.textContent = "Login failed. Check credentials.";
        console.log(error);
    }
}

window.loginUser = loginUser;
