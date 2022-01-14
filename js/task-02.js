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
  items.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = element;
    itemEl.classList.add("item");
    return ingredientsList.append(itemEl);
  });
};

additionItems(ingredients);
