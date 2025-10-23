const modalWindow = document.getElementById("modalWindow");
const showSquareBtn = document.getElementById("showSquare");

showSquareBtn.addEventListener("click", () => {
  modalWindow.style.display = "block";
  document.body.style.overflow = "hidden";
});

modalWindow.addEventListener("click", () => {
  modalWindow.style.display = "none";
  document.body.style.overflow = "auto";
});
