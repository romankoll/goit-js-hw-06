const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

// Виводимо кількість категорій в списку
console.log(`Number of categories: ${categoriesItems.length}`);

// Для кожного елемента li.item виводимо текст заголовку та кількість елементів в категорії
categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
