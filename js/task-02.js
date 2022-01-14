const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const additionItems = (items) => {
  const list = items.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = element;
    itemEl.classList.add("item");
    return itemEl;
  });
  return ingredientsList.append(...list);
};

additionItems(ingredients);
