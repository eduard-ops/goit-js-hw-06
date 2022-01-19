const inputEl = document.querySelector("#controls input");

const buttonCreat = document.querySelector("button[data-create]");

const buttonDestroy = document.querySelector("button[data-destroy]");

const boxesDiv = document.querySelector("#boxes");

buttonCreat.addEventListener("click", createDivMarkup);

function createDivMarkup(evt) {
  evt.preventDefault();
  const arreyDiv = [];

  let divWidth = 30;
  let divHeight = 30;
  for (let i = 0; i < inputEl.value; i += 1) {
    const newDivEl = document.createElement("div");
    newDivEl.style.backgroundColor = `${getRandomHexColor()}`;
    newDivEl.style.width = `${(divWidth += 10)}px`;
    newDivEl.style.height = `${(divHeight += 10)}px`;
    arreyDiv.push(newDivEl);
  }
  return boxesDiv.append(...arreyDiv);
}

buttonDestroy.addEventListener("click", onClickDestroyButton);

function onClickDestroyButton() {
  boxesDiv.innerHTML = "";
  inputEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
