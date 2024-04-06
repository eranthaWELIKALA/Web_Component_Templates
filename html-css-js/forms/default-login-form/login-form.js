// JavaScript for validations
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function (event) {
    let isValid = true;

    // Reset error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validate username
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        usernameError.classList.remove("inactive");
        usernameError.classList.add("active");
        isValid = false;
    }
    else {
        usernameError.textContent = 'No errors';
        usernameError.classList.remove("active");
        usernameError.classList.add("inactive");
    }

    // Validate password
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        passwordError.classList.remove("inactive");
        passwordError.classList.add("active");
        isValid = false;
    }
    else {
        passwordError.textContent = 'No errors';
        passwordError.classList.remove("active");
        passwordError.classList.add("inactive");
    }

    // Prevent form submission if not valid
    if (!isValid) {
        event.preventDefault();
    }
});