function initEditableBlocks() {
  const blockLocalStorage = document.getElementById("blockLocalStorage");
  const blockCookies = document.getElementById("blockCookies");
  const blockSessionStorage = document.getElementById("blockSessionStorage");

  const saved1 = localStorage.getItem("block1Text");
  if (saved1) blockLocalStorage.textContent = saved1;
  blockLocalStorage.addEventListener("input", () => {
    localStorage.setItem("block1Text", blockLocalStorage.textContent);
  });

  const saved2 = sessionStorage.getItem("block3Text");
  if (saved2) blockSessionStorage.textContent = saved2;
  blockSessionStorage.addEventListener("input", () => {
    sessionStorage.setItem(
      "block3Text",
      blockSessionStorage.textContent.trim()
    );
  });

  const saved3 = getCookie("block2Text");

  if (saved3) blockCookies.textContent = saved3;
  blockCookies.addEventListener("input", () => {
    setCookie("block2Text", blockCookies.textContent.trim(), 7);
  });
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + d.toUTCString();
  }
  document.cookie =
    name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let c of cookies) {
    c = c.trim();
    if (c.startsWith(name + "=")) {
      return decodeURIComponent(c.substring(name.length + 1));
    }
  }
  return "";
}

window.onload = initEditableBlocks;
