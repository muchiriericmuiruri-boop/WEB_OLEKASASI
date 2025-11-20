// main.js — shared JS file for Olekasasi Portal

console.log("Main.js loaded — you can add shared functions here.");

// Example: a function to log out a user
import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

export async function logoutUser() {
    try {
        await signOut(auth);
        alert("You have been logged out.");
        window.location.href = "./index.html"; // redirect to login page
    } catch (error) {
        console.error("Error logging out:", error);
    }
}

// Attach function to window so you can call it from HTML
window.logoutUser = logoutUser;
