// Task Three

let squareTaskThree = document.getElementsByClassName("squareTaskThree");
let switchDisplayTaskThree = true;

function onOfBtnTaskThree() {
  for (let i = 0; i < squareTaskThree.length; i++) {
    if (switchDisplayTaskThree) {
      squareTaskThree[i].style.visibility = "hidden";
    } else {
      squareTaskThree[i].style.visibility = "visible";
    }
  }
  switchDisplayTaskThree = !switchDisplayTaskThree;
}
