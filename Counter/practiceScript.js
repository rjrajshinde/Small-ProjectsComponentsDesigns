const value = document.getElementById("value");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

var count = 0;
value.textContent = count;

function reset() {
  count = 0;
  value.textContent = count;
}

function countIncrease() {
  value.textContent = ++count;
}

function countDecrease() {
  value.textContent = --count;
}

function changeCountColor() {
  if (count < 0) {
    value.style.color = "red";
  } else if (count > 0) {
    value.style.color = "#31d308";
  } else {
    value.style.color = "black";
  }
}

resetBtn.addEventListener("click", reset);
decreaseBtn.addEventListener("click", countDecrease);
increaseBtn.addEventListener("click", countIncrease);
resetBtn.addEventListener("click", changeCountColor);
decreaseBtn.addEventListener("click", changeCountColor);
increaseBtn.addEventListener("click", changeCountColor);
