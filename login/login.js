// login.js — handles login using Firebase Authentication (V12 MODULE STYLE)

import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// MAIN LOGIN FUNCTION
export async function loginUser() {
    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    const loginMessage = document.getElementById("loginMessage");
    const loginSuccess = document.getElementById("loginSuccess");

    loginMessage.style.display = "none";
    loginSuccess.style.display = "none";

    if (!username || !password) {
        loginMessage.style.display = "block";
        loginMessage.textContent = "Please enter username and password.";
        return;
    }

    // Convert raw username → email format
    const email = username + "@school.com";

    try {
        await signInWithEmailAndPassword(auth, email, password);

        loginSuccess.style.display = "block";
        loginSuccess.textContent = "Login successful! Redirecting...";

        // REDIRECT BASED ON USERNAME
        if (username === "samuelmusyoki") {
            window.location.href = "../admin/admin-official.html";
        } 
        else if (username === "schooladmin") {
            window.location.href = "../admin/admin-school.html";
        }
        else if (username.startsWith("teacher")) {
            window.location.href = "../admin/admin-teacher.html";
        }
        else if (username.startsWith("student")) {
            window.location.href = "../dashboard/dashboard-student.html";
        }
        else if (username.startsWith("parent")) {
            window.location.href = "../dashboard/dashboard-parent.html";
        }
        else {
            window.location.href = "../dashboard/index.html";
        }

    } catch (error) {
        loginMessage.style.display = "block";
        loginMessage.textContent = "Invalid username or password.";
        console.log(error);
    }
}

// Attach function to window so HTML button can find it
window.loginUser = loginUser;

