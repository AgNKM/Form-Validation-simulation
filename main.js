//variables
const email = document.getElementById("email"),
  message = document.getElementById("message"),
  subject = document.getElementById("subject"),
  sendBtn = document.getElementById("send"),
  resetBtn = document.getElementById("resetBtn"),
  emailForm = document.getElementById("form"),
  spinner = document.getElementById("spinner"),
  sent = document.getElementById("sent");

//event listeners
function eventListeners() {
  document.addEventListener("DOMContentLoaded", appInit);
  message.addEventListener("blur", validateField);
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  resetBtn.addEventListener("click", resetForm);
  emailForm.addEventListener("submit", submitForm);
}

eventListeners();

//functions
function appInit() {
  sendBtn.disabled = true;
}

function validateField() {
  let errors;
  validateLength(this);
  if (this.type === "email") {
    validateEmail(this);
  }
  errors = document.querySelectorAll(".error");
  if (message.value !== "" && email.value !== "" && subject.value !== "") {
    if (errors.length === 0) {
      sendBtn.disabled = false;
      console.log("good");
    }
  }
}

function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

function validateEmail(field) {
  if (field.value.indexOf("@") !== -1) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}
//
function resetForm() {
  emailForm.reset();
}
//
function submitForm(e) {
  e.preventDefault();
  spinner.style.display = "block";

  setTimeout(function () {
    spinner.style.display = "none";
    sent.style.display = "block";
    setTimeout(function () {
      sent.style.display = "none";
      emailForm.reset();
    }, 2500);
  }, 3000);
}
