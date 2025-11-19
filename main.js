// main.js

// LOGIN FUNCTION
function loginUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    db.collection("users")
      .where("username", "==", username)
      .where("password", "==", password)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const user = querySnapshot.docs[0].data();

          // Redirect by role
          if (user.role === "admin") {
            window.location.href = "admin-official.html";
          } else if (user.role === "teacher") {
            window.location.href = "teacher-dashboard.html";
          } else if (user.role === "student") {
            window.location.href = "student-dashboard.html";
          } else {
            alert("Unknown user role.");
          }

        } else {
          alert("Invalid username or password!");
        }
      })
      .catch((error) => console.log("Error: ", error));
}


// ADD USER (Admin)
function addUser(username, password, role) {
  db.collection("users").add({
      username: username,
      password: password,
      role: role
  })
  .then(() => alert("User added successfully!"))
  .catch((error) => console.error("Error adding user: ", error));
}


// UPLOAD STUDENT PHOTO
function uploadStudentPhoto(file, admissionNo) {
  const storageRef = storage.ref("students/" + admissionNo + "/" + file.name);

  storageRef.put(file)
    .then(() => alert("Photo uploaded successfully!"))
    .catch((error) => console.log("Upload error: ", error));
}
