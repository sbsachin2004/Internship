// script.js

function validateRegister() {
  let valid = true;

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Clear all errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passError").innerText = "";
  document.getElementById("confirmError").innerText = "";

  // Validate Name
  if (name.length < 3) {
    document.getElementById("nameError").innerText = "Name must be at least 3 characters";
    valid = false;
  }

  // Validate Email format (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    valid = false;
  }

  // Validate Password
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
    alert("Registration successful!");
    window.location.href = "index.html";
  }

  return false; // Prevent actual form submission
}

function validateLogin() {
  let valid = true;

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Clear errors
  document.getElementById("loginEmailError").innerText = "";
  document.getElementById("loginPassError").innerText = "";

  // Email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("loginEmailError").innerText = "Enter a valid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("loginPassError").innerText = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  }

  return false;
}
