// Form Validation Logic
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Retrieve form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Track errors
    let hasError = false;

    // Full Name Validation
    if (fullName.length < 5) {
        showAlert("Full name must be at least 5 characters.");
        document.getElementById("nameError").innerText = "Full name must be at least 5 characters.";
        hasError = true;
    }

    // Email Validation
    if (!email.includes("@")) {
        showAlert("Please enter a valid email.");
        document.getElementById("emailError").innerText = "Please enter a valid email.";
        hasError = true;
    }

    // Phone Number Validation
    const phoneRegex = /^\d{10}$/;
    if (phoneNumber === "123456789" || !phoneRegex.test(phoneNumber)) {
        showAlert("Please enter a valid 10-digit phone number.");
        document.getElementById("phoneError").innerText = "Please enter a valid 10-digit phone number.";
        hasError = true;
    }

    // Password Validation
    if (password.length < 8 || password.toLowerCase() === "password" || password === fullName) {
        showAlert("Password must be at least 8 characters and should not be 'password' or your name.");
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters and should not be 'password' or your name.";
        hasError = true;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        showAlert("Passwords do not match.");
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        hasError = true;
    }

    // If no error, submit the form
    if (!hasError) {
        alert("Form submitted successfully!");
        // Form submission logic here (e.g., send data to server)
    }
});

// Function to show alert messages
function showAlert(message) {
    alert(message);
}

// Clear error messages
function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
}

// Optional: Add onChange event listeners for real-time validation
document.getElementById("fullName").addEventListener("input", function() {
    if (this.value.length >= 5) {
        document.getElementById("nameError").innerText = "";
    }
});

document.getElementById("email").addEventListener("input", function() {
    if (this.value.includes("@")) {
        document.getElementById("emailError").innerText = "";
    }
});

document.getElementById("phoneNumber").addEventListener("input", function() {
    if (/^\d{10}$/.test(this.value) && this.value !== "123456789") {
        document.getElementById("phoneError").innerText = "";
    }
});

document.getElementById("password").addEventListener("input", function() {
    const fullName = document.getElementById("fullName").value;
    if (this.value.length >= 8 && this.value.toLowerCase() !== "password" && this.value !== fullName) {
        document.getElementById("passwordError").innerText = "";
    }
});

document.getElementById("confirmPassword").addEventListener("input", function() {
    const password = document.getElementById("password").value;
    if (this.value === password) {
        document.getElementById("confirmPasswordError").innerText = "";
    }
});
