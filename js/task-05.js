const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", OnInputSpan);

function OnInputSpan(event) {
  if (event.currentTarget.value === "") {
    return (outputEl.textContent = "Anonimus");
  }
  return (outputEl.textContent = event.currentTarget.value);
}
