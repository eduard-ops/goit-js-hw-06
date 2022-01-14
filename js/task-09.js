const buttonEl = document.querySelector(".change-color");

const textEl = document.querySelector(".color");

const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", OnButtonChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function OnButtonChangeColor(param) {
  textEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = textEl.textContent;
}
