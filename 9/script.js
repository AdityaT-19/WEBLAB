function validateForm(event) {
  // Get form values
  event.preventDefault();
  var userId = document.forms["registrationForm"]["userId"].value;
  var name = document.forms["registrationForm"]["name"].value;
  var password = document.forms["registrationForm"]["password"].value;
  var email = document.forms["registrationForm"]["email"].value;

  // User ID validation
  if (userId.length < 5 || userId.length > 12) {
    alert("User ID must be between 5 and 12 characters long");
    return false;
  }

  // Name validation
  if (name.length < 15 || !/^[a-zA-Z ]+$/.test(name)) {
    alert(
      "Name must be at least 15 characters long and contain only alphabets"
    );
    return false;
  }

  // Password validation
  var passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be eight characters including one uppercase letter, one special character, and alphanumeric characters"
    );
    return false;
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  document.getElementById("validDetails").value =
    "User ID: " +
    userId +
    "\nName: " +
    name +
    "\nPassword: " +
    password +
    "\nEmail: " +
    email;
  return false;
}
