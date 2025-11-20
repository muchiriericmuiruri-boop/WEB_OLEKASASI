// login.js — handles login using Firebase Authentication (V12 MODULE STYLE)
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// ---- ADMIN LOGIN SETTINGS ----
const adminEmail = "samuelmusyoki@school.com"; 
const adminPassword = "315573301031871"; 
const adminPage = "../admin/index.html";  // <-- Your main admin page
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

    try {
        // ---- ADMIN LOGIN ----
        if (email === adminEmail && password === adminPassword) {
            await signInWithEmailAndPassword(auth, adminEmail, adminPassword);

            loginSuccess.style.display = "block";
            loginSuccess.textContent = "Admin login successful! Redirecting...";

            // Redirect to main admin dashboard
            window.location.href = adminPage;
            return;
        }

        // ---- OTHER USERS ----
        // Users with Firebase-auth accounts (students, teachers, parents)
        await signInWithEmailAndPassword(auth, email, password);

        loginSuccess.style.display = "block";
        loginSuccess.textContent = "Login successful! Redirecting...";

        // Redirect based on email patterns
        if (email.startsWith("teacher")) {
            window.location.href = "../dashboard/dashboard-teacher.html";
        } else if (email.startsWith("student")) {
            window.location.href = "../dashboard/dashboard-student.html";
        } else if (email.startsWith("parent")) {
            window.location.href = "../dashboard/dashboard-parent.html";
        } else {
            // default fallback
            window.location.href = "../dashboard/index.html";
        }

    } catch (error) {
        loginMessage.style.display = "block";
        loginMessage.textContent = "Invalid username or password.";
        console.log(error);
    }
}

// Attach function to window so HTML can call it
window.loginUser = loginUser;
