// script.js

function validateRegister() {
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (name.length < 3) {
    alert("Name must be at least 3 characters");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  alert("Registration successful!");
  window.location.href = "index.html";
  return false; // prevent real form submit
}

function validateLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  alert("Login successful!");
  window.location.href = "dashboard.html";
  return false; // prevent real form submit
}
