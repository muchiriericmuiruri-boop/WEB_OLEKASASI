function loginUser() {
    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const loginMessage = document.getElementById("loginMessage");
    const loginSuccess = document.getElementById("loginSuccess");

    loginMessage.style.display = "none";
    loginSuccess.style.display = "none";

    // Map username to email (must exist in Firebase Authentication)
    const email = usernameInput.toLowerCase() + "@school.com";

    firebase.auth().signInWithEmailAndPassword(email, passwordInput)
        .then((userCredential) => {
            loginSuccess.style.display = "block";
            loginSuccess.textContent = "Login successful! Redirecting...";

            // Redirect based on username
            switch(usernameInput.toLowerCase()) {
                case "samuelmusyoki":
                    window.location.href = "admin-official.html";
                    break;
                case "teacher1":
                    window.location.href = "admin-teacher.html";
                    break;
                case "schooladmin":
                    window.location.href = "admin-school.html";
                    break;
                case "student1":
                    window.location.href = "dashboard-student.html";
                    break;
                case "parent1":
                    window.location.href = "dashboard-parent.html";
                    break;
                default:
                    window.location.href = "dashboard.html";
            }
        })
        .catch((error) => {
            loginMessage.style.display = "block";
            loginMessage.textContent = "Invalid username or password!";
            console.error(error.message);
        });
}
