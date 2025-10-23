// Task Six

const squareTaskSix = document.getElementById("boxTaskSix");
const btnTaskSix = document.getElementById("btnTaskSix");

btnTaskSix.addEventListener("mouseover", () => {
  squareTaskSix.style.visibility = "visible";
});

btnTaskSix.addEventListener("mouseleave", () => {
  squareTaskSix.style.visibility = "hidden";
});
