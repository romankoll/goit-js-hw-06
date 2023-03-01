const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = fontSizeControl.value + "px";
});

// Для вирішення цього завдання можна використовувати подію input на елементі input#font-size-contr
//  Під час кожної зміни значення повзунка потрібно змінювати властивість font - size на елементі span#text.

//
// Отже, можна створити обробник події на елементі input#font-size-control, який буде встановлювати відповідне
//  значення властивості font - size на елементі span#text.
//
// Нижче наведений код для вирішення цього завдання:
