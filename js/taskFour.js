// Task Four

let inputSelectorTaskFour = document.getElementById("inputSelectorTaskFour");

function getInputSelectorTaskFour() {
  let inputValue = inputSelectorTaskFour.value;
  let elementBySelector = document.getElementById(inputValue);
  if (elementBySelector != null) {
    let elementVisibility = window.getComputedStyle(
      document.querySelector("#" + inputValue)
    ).visibility;
    if (elementVisibility == "visible") {
      elementBySelector.style.visibility = "hidden";
    } else {
      elementBySelector.style.visibility = "visible";
    }
  } else {
    alert("There are no elements with this selector.");
  }
  inputSelectorTaskFour.value = "";
}
