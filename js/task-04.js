let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector(`button[data-action = "decrement"]`),
  btnIncrement: document.querySelector(`button[data-action = "increment"]`),
  textValue: document.querySelector("#value"),
};

refs.btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  refs.textValue.textContent = counterValue;
});

refs.btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  refs.textValue.textContent = counterValue;
});
