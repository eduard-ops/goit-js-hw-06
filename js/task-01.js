// Получаем доступ к селоктору ul#categories;

const listEl = document.querySelectorAll("ul#categories li.item");

const calculateQuantityOfCategories = (item) => {
  console.log(`Number of categories: ${item.length}`);
};

calculateQuantityOfCategories(listEl);

const calculateQuantityOfItem = (item) => {
  item.forEach((element) => {
    const heading = element.querySelector("h2").textContent;
    const liLength = element.querySelector("ul").querySelectorAll("li").length;
    console.log(`Category: ${heading}`);
    console.log(`Elements: ${liLength}`);
  });
};

calculateQuantityOfItem(listEl);
