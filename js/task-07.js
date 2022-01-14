const rangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

rangeEl.addEventListener("input", onInputChangeRange);

function onInputChangeRange(event) {
  return (spanEl.style.fontSize = `${event.currentTarget.value}px`);
}
