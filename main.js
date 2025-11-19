// Import Firebase modules (if using module, otherwise just use firebase global)
// You already included the Firebase SDKs above

// Get Firebase auth reference
const auth = firebase.auth();

// Login function
function loginUser() {
    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const loginMessage = document.getElementById("loginMessage");
    const loginSuccess = document.getElementById("loginSuccess");

    loginMessage.style.display = "none";
    loginSuccess.style.display = "none";

    // Convert username to email (for Firebase login)
    // Here we define that the official admin username is samuelmusyoki → samuelmusyoki@school.com
    let email = usernameInput.toLowerCase() + "@school.com";

    auth.signInWithEmailAndPassword(email, passwordInput)
        .then((userCredential) => {
            // Login successful
            loginSuccess.style.display = "block";
            loginSuccess.textContent = "Login successful! Redirecting...";

            // Redirect based on user
            if (usernameInput.toLowerCase() === "samuelmusyoki") {
                window.location.href = "admin-official.html";
            } else if (usernameInput.toLowerCase() === "teacher1") {
                window.location.href = "admin-teacher.html";
            } else if (usernameInput.toLowerCase() === "schooladmin") {
                window.location.href = "admin-school.html";
            } else if (usernameInput.toLowerCase() === "student1") {
                window.location.href = "dashboard-student.html";
            } else if (usernameInput.toLowerCase() === "parent1") {
                window.location.href = "dashboard-parent.html";
            } else {
                // Default redirect if new roles are added
                window.location.href = "dashboard.html";
            }
        })
        .catch((error) => {
            loginMessage.style.display = "block";
            loginMessage.textContent = "Invalid username or password!";
            console.error(error.message);
        });
}
