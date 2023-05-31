import { createStore } from "redux";

const initialState = 0;

const counter = (state = initialState, action) => {
  if (action.type === "INCREMENT") state += 1;
  if (action.type === "DECREMENT") state -= 1;
  if (action.type === "RESET") state = initialState;
  return state;
};

const store = createStore(counter);

const count = document.createElement("div");
count.className = "count";

count.innerHTML = store.getState();

const increment = {
  type: "INCREMENT",
};

const decrement = {
  type: "DECREMENT",
};

const reset = {
  type: "RESET",
};

document.querySelector("#app").append(count);

const btnWrapper = document.createElement("div");
btnWrapper.className = "btn-wrapper";
document.querySelector("#app").append(btnWrapper);

const btnArray = [
  {
    className: "decrement-btn btn",
    id: "decrementBtn",
    text: "Decrement counter",
  },
  {
    className: "increment-btn btn",
    id: "incrementBtn",
    text: "Increment counter",
  },
  {
    className: "reset-btn btn",
    id: "resetBtn",
    text: "Reset counter",
  },
];

const createButtons = (arr) => {
  arr.map(({ className, id, text }) => {
    let btn = document.createElement("button");
    btn.className = className;
    btn.id = id;
    btn.innerText = text;
    document.querySelector(".btn-wrapper").append(btn);
  });
};

createButtons(btnArray);

decrementBtn.onclick = () => store.dispatch(decrement);
incrementBtn.onclick = () => store.dispatch(increment);
resetBtn.onclick = () => store.dispatch(reset);

const render = () => {
  document.querySelector(".count").innerText = store.getState();
};

store.subscribe(render);
