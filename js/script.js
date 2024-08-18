//variables
const radioElements = document.querySelectorAll(".query-radios input");
const submitButton = document.getElementById("submit-button");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const firstNameError = document.getElementById("firstName-error");
const lastNameError = document.getElementById("lastName-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const queryTypeRadios = document.getElementsByName("queryType");
const queryTypeError = document.getElementById("queryType-error");
const message = document.getElementById("message");
const messageError = document.getElementById("message-error");
const contactedCheckbox = document.getElementById("contacted");
const contactedkError = document.getElementById("contacted-error");

//Handlers
const rdioButtonHandler = (e) => {
  console.log(e.target.parentNode);

  e.target.parentNode.style.backgroundColor = "#e1f1e7";
  if (e.target.id === "general") {
    e.target.parentNode.nextElementSibling.style.backgroundColor = "#fff";
  } else {
    e.target.parentNode.previousElementSibling.style.backgroundColor = "#fff";
  }
};

const radioMouseOverHandler = (e) => {
  console.dir(e.target);

  //   if (e.target.checked) {
  //     e.target.style.accentColor = "#02745b";
  //   }
};

const clearStyles = () => {
  firstName.classList.remove("error");
  lastName.classList.remove("error");
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";

  email.classList.remove("error");
  emailError.style.display = "none";

  queryTypeError.style.display = "none";

  message.classList.remove("error");
  messageError.style.display = "none";

  contactedkError.style.display = "none";
};

const validateRadios = (element) => {
  for (let i = 0; i < element.length; i++) {
    if (element[i].checked) return true;
  }

  return false;
};
const validateForm = () => {
  clearStyles();

  if (!firstName.value) {
    firstName.classList.add("error");
    firstNameError.style.display = "block";
  }

  if (!lastName.value) {
    lastName.classList.add("error");
    lastNameError.style.display = "block";
  }

  if (!email.value) {
    email.classList.add("error");
    emailError.style.display = "block";
  }

  if (!validateRadios(queryTypeRadios)) {
    // email.classList.add("error");
    queryTypeError.style.display = "block";
  }

  if (!message.value) {
    message.classList.add("error");
    messageError.style.display = "block";
  }

  if (!contactedCheckbox.checked){
    contactedkError.style.display = "block";
  }
  return false;
};

const submitHandler = (e) => {
  if (!validateForm()) {
    console.log("success...");
  } else {
    console.log("error!!!");
  }
};

//Events
radioElements.forEach((radio) => {
  radio.addEventListener("click", rdioButtonHandler);
  //   radio.addEventListener("mouseover", radioMouseOverHandler);
});

submitButton.addEventListener("click", submitHandler);

// pasteCatcher.focus();
firstName.addEventListener("focus", function (e) {
  e.preventDefault();
});
