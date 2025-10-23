// Task Eight
const inputSelectorTaskEight = document.getElementById(
  "inputSelectorTaskEight"
);
const containerTaskEight = document.getElementById("boxTaskEight");

const btnTaskEigh = document.getElementById("getImgTaskEight");

btnTaskEigh.addEventListener("click", getImage);

function getImage() {
  containerTaskEight.innerHTML = "";
  let url = inputSelectorTaskEight.value;
  const img = document.createElement("img");
  img.src = url;
  containerTaskEight.appendChild(img);
  inputSelectorTaskEight.value = "";
}
