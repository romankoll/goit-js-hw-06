const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItemEls = ingredients.map((element) => {
  //map - Поелементо перебирає оригінальний масив.
  const listItemEl = document.createElement("li"); //createElement("li") створює елемент з заданим тегом
  listItemEl.classList.add("item"); // Element.classList.add() - додає клас до елементу.
  listItemEl.textContent = element; // textContent позволяет считывать или задавать текстовое содержимое элемента.
  return listItemEl;
});

const ingredientsEl = document.querySelector("#ingredients");
//querySelectorAll() метод об'єкту document який повертає масив елементів за вказаним CSS селектором.
ingredientsEl.append(...listItemEls); //Метод append позволяет вставить в конец какого-либо элемента другой элемент
