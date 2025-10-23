const browserLanguage = document.getElementById("browser__language");

const language = navigator.language;

browserLanguage.innerHTML = "Browser Language: " + language;
