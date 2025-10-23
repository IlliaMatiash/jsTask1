// Task Nine
const textarea = document.getElementById("textareaTaskNine");
const button = document.getElementById("getImgsTaskNine");
const container = document.getElementById("imgContainer");

button.addEventListener("click", () => {
  const links = textarea.value
    .split("\n")
    .map((link) => link.trim())
    .filter((link) => link);

  container.innerHTML = "";

  links.forEach((url) => {
    console.log(url);
    const img = document.createElement("img");
    const div = document.createElement("div");
    div.className = "square squareTaskNine";
    img.src = url;

    div.appendChild(img);
    container.appendChild(div);
  });
});
