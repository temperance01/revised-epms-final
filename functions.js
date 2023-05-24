function togglePasswordVisibility() {
    const loginPasswordInput = document.getElementById('password');
    const loginPasswordCheckbox = document.getElementById('loginPasswordCheckbox');
    const signupPasswordInput = document.getElementById('signupPassword');
    const signupPasswordCheckbox = document.getElementById('signupPasswordCheckbox');
  
    if (loginPasswordCheckbox && loginPasswordCheckbox.checked) {
      // Show password for login form
      loginPasswordInput.type = 'text';
    } else {
      // Hide password for login form
      loginPasswordInput.type = 'password';
    }
  
    if (signupPasswordCheckbox && signupPasswordCheckbox.checked) {
      // Show password for signup form
      signupPasswordInput.type = 'text';
    } else {
      // Hide password for signup form
      signupPasswordInput.type = 'password';
    }
  }