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


function logout(){
  // Hide the content
  document.getElementById("applianceInventoryContent").style.display = "none";
  document.getElementById("calculation").style.display = "none";
                
  // Show the login and signup forms
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "block";

  //hide menu
  document.getElementById('menu').style.display = 'none';
  
  // Clear any stored user email
  localStorage.removeItem("userEmail");

  // Clear the appliance table
  var table = document.getElementById("applianceTable");
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  // Clear the calculation table
  var table = document.getElementById("calculationTable");
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function inventoryButton(){
  document.getElementById("applianceInventoryContent").style.display = "block";
  document.getElementById("calculation").style.display = "none";
}

function calculationButton(){
  document.getElementById("applianceInventoryContent").style.display = "none";
  document.getElementById("calculation").style.display = "block";
}

function updatesButton(){
  document.getElementById("applianceInventoryContent").style.display = "none";
  document.getElementById("calculation").style.display = "none";
  document.getElementById("updates").style.display = "block";
}
