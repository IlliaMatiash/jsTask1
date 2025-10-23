// Task Two

let squareTaskTwo = document.getElementById("squareTaskTwo");
let switchDisplayTaskTwo = true;

function onOfBtnTaskTwo() {
  if (switchDisplayTaskTwo) {
    squareTaskTwo.style.visibility = "hidden";
    // switchDisplayTaskTwo = false;
  } else {
    squareTaskTwo.style.visibility = "visible";
    // switchDisplayTaskTwo = true;
  }
  switchDisplayTaskTwo = !switchDisplayTaskTwo;
}
