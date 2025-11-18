// ------------------- Mobile Navigation -------------------
function toggleNav() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('open');
}

// ------------------- Admission Form -------------------
const admissionForm = document.getElementById('admissionForm');
if (admissionForm) {
  admissionForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    document.getElementById('successMessage').style.display = 'block';
    admissionForm.reset();
  });
}

// WhatsApp submission
const whatsappBtn = document.getElementById('whatsappBtn');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', function() {
    const fullname = document.getElementById('fullname').value;
    const kcpe = document.getElementById('kcpe').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const text = `New Admission Application:\nName: ${fullname}\nKCPE: ${kcpe}\nDOB: ${dob}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappNumber = "254796637301"; // Replace with school's WhatsApp number including country code
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  });
}

// ------------------- Login System with localStorage -------------------
const loginForm = document.getElementById('loginForm');

// Initialize users from localStorage or default demo users
let users = JSON.parse(localStorage.getItem('users')) || [
  { username: "samuelmusyoki", password: "315573301031871", role: "official-admin" },
  { username: "teacher1", password: "teacherpass123", role: "teacher" },
  { username: "schooladmin", password: "adminpass123", role: "school-admin" },
  { username: "student1", password: "studentpass", role: "student" },
  { username: "parent1", password: "parentpass", role: "parent" }
];

// Save to localStorage
function saveUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

// Update localStorage whenever users are added/removed from admin page
window.addEventListener('storage', function(e){
  if(e.key === 'users') {
    users = JSON.parse(e.newValue);
  }
});

if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('loginMessage');

    // Check users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || users;

    const user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
      message.style.color = "green";
      message.textContent = `Login successful! Redirecting to ${user.role} dashboard...`;

      setTimeout(() => {
        // Redirect based on role
        switch(user.role){
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
        }
      }, 1500);
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password!";
    }
  });
}
