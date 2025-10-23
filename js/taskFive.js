// Task Five

const yellowBox = document.querySelector("#yellowBoxTaskFive");

yellowBox.addEventListener("click", sayHello);

function sayHello() {
  alert("Hello");

  yellowBox.removeEventListener("click", sayHello);

  yellowBox.addEventListener("click", hiddenYellowBox);
}

function hiddenYellowBox() {
  yellowBox.style.visibility = "hidden";
}
