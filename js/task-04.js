const counter = document.querySelector("#counter");
const counterValue = document.querySelector("#value");

let count = 0;

counter.addEventListener("click", (event) => {
  const action = event.target.dataset.action;

  if (action === "increment") {
    count += 1;
  } else if (action === "decrement") {
    count -= 1;
  }

  counterValue.textContent = count;
});
