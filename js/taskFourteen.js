const goTopBtn = document.getElementById("goTop");

goTopBtn.addEventListener("click", goTop);
// window.addEventListener("scroll", trackScroll);

function trackScroll() {}

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});
