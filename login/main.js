// Protect pages that require login (optional)

import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // not logged in
        window.location.href = "../login/login.html";
    }
});

