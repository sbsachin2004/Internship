let users = [
  ["sachin@example.com", "123456"],
  ["admin@example.com", "admin123"],
  ["test@abc.com", "testpass"],
  ["user@demo.com", "demo123"],
  ["guest@mail.com", "guest123"]
];

function validateRegister() {
  let valid = true;

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passError").innerText = "";
  document.getElementById("confirmError").innerText = "";

  // Name validation
  if (name.length < 3) {
    document.getElementById("nameError").innerText = "Name must be at least 3 characters";
    valid = false;
  }

  // Email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email address";
    valid = false;
  }

  // Check if email already exists
  const exists = users.some(user => user[0] === email);
  if (exists) {
    document.getElementById("emailError").innerText = "Email already registered";
    valid = false;
  }

  // Password
  if (password.length < 6) {
    document.getElementById("passError").innerText = "Password must be at least 6 characters";
    valid = false;
  }

  // Confirm Password
  if (password !== confirmPassword) {
    document.getElementById("confirmError").innerText = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    // Save to dummy array
    users.push([email, password]);
    alert("Registration successful!");
    window.location.href = "index.html"; // redirect to login
  }

  return false; // prevent real form submit
}

// ✅ Login Form Validation
function validateLogin() {
  let valid = true;

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Clear previous errors
  document.getElementById("loginEmailError").innerText = "";
  document.getElementById("loginPassError").innerText = "";

  // Email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("loginEmailError").innerText = "Enter a valid email address";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("loginPassError").innerText = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    const found = users.some(user => user[0] === email && user[1] === password);
    if (found) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("loginPassError").innerText = "Invalid email or password";
    }
  }

  return false; // prevent actual form submit
}
