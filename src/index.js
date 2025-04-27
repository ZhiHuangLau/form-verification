const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const password = document.getElementById("pwd");
const passwordError = document.querySelector("#pwd + span.error");
const password2 = document.getElementById("conPwd")
const password2Error = document.querySelector("#conPwd + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Remove the message content
    emailError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showEmailError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showEmailError();
    // prevent form submission
    event.preventDefault();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the `active` class
  emailError.className = "error active";
}


password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = ""; // Remove the message content
    passwordError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showPwdError();
  }
});

function showPwdError() {
  if (password.validity.valueMissing) {
    // If empty
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.tooShort) {
    // If the value is too short,
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
  // Add the `active` class
  passwordError.className = "error active";
}

password2.addEventListener("input", (event) => {
  if (password2.validity.valid & (password2.value == password.value)) {
    password2Error.textContent = ""; // Remove the message content
    password2Error.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showPwd2Error();
  }
});


function showPwd2Error() {
  if (password2.validity.valueMissing) {
    // If empty
    password2Error.textContent = "You need to enter a password.";
  } else if (password2.validity.tooShort) {
    // If the value is too short,
    password2Error.textContent = `Password should be at least ${password2.minLength} characters; you entered ${password2.value.length}.`;
  } else if (password.value != password2.value){
    // If the passwords do not match,
    password2Error.textContent= 'The passwords do not match.'
    return false
  }
  // Add the `active` class
  password2Error.className = "error active";
}