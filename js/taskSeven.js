// Task Seven

const inputTaskSeven = document.getElementById("inputSelectorTaskSeven");
const squareTaskSeven = document.getElementById("boxTaskSeven");

inputTaskSeven.addEventListener("focus", (event) => {
  squareTaskSeven.style.visibility = "visible";
});

inputTaskSeven.addEventListener("blur", (event) => {
  squareTaskSeven.style.visibility = "hidden";
});

inputTaskSeven.addEventListener("input", () => {
  squareTaskSeven.style.visibility = "hidden";
});
