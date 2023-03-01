const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  const inputLength = parseInt(inputEl.getAttribute("data-length"));
  const inputValueLength = event.target.value.length;

  if (inputLength === inputValueLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
