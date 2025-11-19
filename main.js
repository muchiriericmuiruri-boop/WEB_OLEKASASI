// LOGIN FUNCTION
function loginUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    db.collection("users")
      .where("username", "==", username)
      .where("password", "==", password)
      .get()
      .then((snapshot) => {

        if (snapshot.empty) {
            alert("❌ Wrong username or password!");
            return;
        }

        const user = snapshot.docs[0].data();

        // Redirect based on role
        switch(user.role) {
            case "official-admin":
                window.location.href = "admin-official.html";
                break;
            case "teacher":
                window.location.href = "admin-teacher.html";
                break;
            case "school-admin":
                window.location.href = "admin-school.html";
                break;
            case "student":
                window.location.href = "dashboard-student.html";
                break;
            case "parent":
                window.location.href = "dashboard-parent.html";
                break;
            case "director-of-subjects":
                window.location.href = "director-subjects.html";
                break;
            default:
                alert("User role not recognized.");
        }
      });
}
