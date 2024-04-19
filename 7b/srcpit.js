const form = document.getElementById("myForm");
const displayInfo = document.getElementById("displayInfo");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    displayCombinedInfo();
  }
});

function validateForm() {
  const emailInput = document.getElementById("email");
  const mobileInput = document.getElementById("mobile");
  const genderInput = document.getElementById("gender");


  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    emailInput.value.trim() === "" ||
    !emailRegex.test(emailInput.value.trim())
  ) {
    alert("Email is required in correct format");
    return false;
  }

  if (!/^\d{10}$/.test(mobileInput.value.trim())) {
    alert("Mobile No should be exactly 10 digits");
    return false;
  }

  if (genderInput.value === "") {
    alert("Gender is required");
    return false;
  }
  return true;
}

function displayCombinedInfo() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const gender = document.getElementById("gender").value;
  const color = document.getElementById("color").value;

  const combinedInfo = `Name: ${name}\nEmail: ${email}\nMobile No: ${mobile}\nGender: ${gender}\nColor : ${color}`;
  displayInfo.value = combinedInfo;
}
