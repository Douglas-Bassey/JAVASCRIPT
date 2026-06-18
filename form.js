const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const termsInput = document.getElementById("terms");
const strengthBar = document.getElementById("strengthBar");

const nameRegex = /^[A-Za-z]{3,}$/;
const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
const phoneRegex = /^[0-9]{10,15}$/;

// error handling
function showError(input, message, errorId) {
  input.classList.add("invalid");
  input.classList.remove("success");
  const error = document.getElementById(errorId);
  error.style.display = "block";
  error.textContent = message;
}

function showSuccess(input, errorId) {
  input.classList.remove("invalid");
  input.classList.add("success");
  document.getElementById(errorId).style.display = "none";
}

// name validation
function validateName() {
  if (!nameRegex.test(nameInput.value.trim())) {
    showError(nameInput, "Minimum of 3 letters required", "nameError");
    return false;
  }
  showSuccess(nameInput, "nameError");
  return true;
}

// email validation
function validateEmail() {
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Enter a valid email", "emailError");
    return false;
  }
  showSuccess(emailInput, "emailError");
  return true;
}

// phone number validation
function validatePhone() {
  if (!phoneRegex.test(phoneInput.value.trim())) {
    showError(phoneInput, "10 - 15 digits required", "phoneError");
    return false;
  }
  showSuccess(phoneInput, "phoneError");
  return true;
}

// password validation
function validatePassword() {
  const value = passwordInput.value;
  let strength = 0;

  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[a-z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  const colors = ["red", "orange", "yellow", "lightgreen", "green"];
  strengthBar.style.width = "strength * 20 + %";
  strengthBar.style.background = colors[strength - 1] || "red";

  if (strength < 4) {
    showError(passwordInput, "password too weak");
    return false;
  }
  showSuccess(passwordInput, "passwordError");
  return true;
}

// confirm password validation
function validateConfirm() {
  if (confirmInput.value !== passwordInput.value) {
    showError(confirmInput, "password do not match", "confirmError");
    return false;
  }
  showSuccess(confirmInput, "confirmError");
  return true;
}

// terms validation
function validateTerms() {
  if (!termsInput.checked) {
    const error = document.getElementById("termsError");
    error.textContent = "You must agree to the terms";
    return false;
  }
  document.getElementById("termsError").style.display = "none";
  return true;
}

// real time validation
nameInput.addEventListener("input", validateName); 
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);
confirmInput.addEventListener("input", validateConfirm);

// visibility toggle
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    if (target.type === "password") {
      target.type = "text";
      btn.textContent = "hide";
    } else {
      target.type = "password";
      btn.textContent = "show";
    }
  });
});

// handling submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid =
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validatePassword() &&
    validateConfirm() &&
    validateTerms();

  if (isValid) {
    alert("Registration Successful");
    form.reset();
    strengthBar.style.width = "0";
  }
});

