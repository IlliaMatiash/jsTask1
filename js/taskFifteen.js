const bigBox = document.getElementById("bigBox");
const smallBox = document.getElementById("smallBox");

bigBox.addEventListener("click", () => {
  alert("Click on the large block!");
});

smallBox.addEventListener("click", (event) => {
  alert("Click on the small block!");
  event.stopPropagation();
});
