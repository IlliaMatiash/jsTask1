const X = document.getElementById("xAxis");
const Y = document.getElementById("yAxis");

function coordinates(e) {
  X.innerHTML = "X: " + e.pageX;
  Y.innerHTML = "Y: " + e.pageY;
}

addEventListener("mousemove", coordinates);
