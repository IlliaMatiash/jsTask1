const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

// при виборі файлу
fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    showFileName(fileInput.files);
  }
});

// drag over
uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.classList.add("dragover");
});

// drag leave
uploadArea.addEventListener("dragleave", () => {
  uploadArea.classList.remove("dragover");
});

// drop
uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadArea.classList.remove("dragover");

  if (e.dataTransfer.files.length > 0) {
    const file = e.dataTransfer.files[0];
    fileInput.files = e.dataTransfer.files;
    showFileName(file.name);
  }
});

function showFileName() {
  for (let i = 0; i < fileInput.files.length; i++) {
    const p = document.createElement("p");
    p.innerHTML = "" + fileInput.files[i].name;
    fileName.appendChild(p);
  }
  uploadArea.style.borderColor = "#4CAF50";
  uploadArea.style.backgroundColor = "#f0fff0";
}
