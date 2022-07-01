const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let counter = 0;

number.innerText = counter;

const updateText = () => {
  number.innerText = counter;
};

const handleAdd = () => {
  counter++;
  updateText();
};

const handleMinus = () => {
  counter--;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// import { createStore } from "redux";

// const countModifier = (count = 0, action) => {
//   console.log(count, action);
//   if (action.type === "ADD") {
//     return count + 1;
//   } else if (action.type === "MINUS") {
//     return count - 1;
//   } else {
//     return count;
//   }
// };

// const countStore = createStore(countModifier);

// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });
// console.log(countStore.getState());
