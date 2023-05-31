import { createStore } from "redux";

const counter = (state = 0, action) => {
  if (action.type === "INCREMENT") state += 1;
  if (action.type === "DECREMENT") state -= 1;
  if (action.type === "RESET") state = 0;
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

const decrementBtn = document.createElement("button");
decrementBtn.className = "decrement-btn btn";
decrementBtn.innerText = "Decrement counter";
document.querySelector(".btn-wrapper").append(decrementBtn);
decrementBtn.onclick = () => store.dispatch(decrement);

const incrementBtn = document.createElement("button");
incrementBtn.className = "increment-btn btn";
incrementBtn.innerText = "Increment counter";
document.querySelector(".btn-wrapper").append(incrementBtn);
incrementBtn.onclick = () => store.dispatch(increment);

const resetBtn = document.createElement("button");
resetBtn.className = "reset-btn btn";
resetBtn.innerText = "Reset counter";
document.querySelector(".btn-wrapper").append(resetBtn);
resetBtn.onclick = () => store.dispatch(reset);

const render = () => {
  document.querySelector(".count").innerText = store.getState();
};

store.subscribe(render);
