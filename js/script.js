//variables
const radioElements = document.querySelectorAll(".query-radios input");

console.dir(radioElements);

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

//Events
radioElements.forEach((radio) => {
  radio.addEventListener("click", rdioButtonHandler);
//   radio.addEventListener("mouseover", radioMouseOverHandler);
});
