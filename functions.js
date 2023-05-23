function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordCheckbox = document.getElementById('passwordCheckbox');

    if (passwordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

