const refill_btn = document.getElementById("refill");
const pay_btn = document.getElementById("pay");

let water = document.getElementById("water");
let milk = document.getElementById("milk");
let tea = document.getElementById("tea");
let coffee = document.getElementById("coffee");
let sugar = document.getElementById("sugar");
let cost = document.getElementById("cost");

let waterValue = 1000,
  milkValue = 1000,
  teaValue = 200,
  coffeeValue = 200,
  sugarValue = 500,
  costRs = 0;

// to load all the values when windows load
window.onload = function WindowLoad(event) {
  water.textContent = 1000;
  milk.textContent = 1000;
  tea.textContent = 200;
  coffee.textContent = 200;
  sugar.textContent = 500;
  cost.textContent = 0;
};

// event to reset all the ingredients
refill_btn.addEventListener("click", () => {
  water.textContent = 1000;
  milk.textContent = 1000;
  tea.textContent = 200;
  coffee.textContent = 200;
  sugar.textContent = 500;
});

pay_btn.addEventListener("click", () => {
  Calculations();
});

function Calculations() {
  let drink = document.querySelector("#drink option:checked").text;
  let cups = document.getElementById("cups").value;
  let sugarAdd = document.getElementById("sugarAdd").checked;

  //if the cups input is empty or user didn't select the drink then it gives alert
  if (cups == "" || drink == "Select your Drink") {
    alert("Please Fill the Below form");
  }
  //if add sugar checkbox checked then substract 5 sugar from stock
  if (sugarAdd) {
    sugarValue -= 5;
  }

  //switch for whether to check which type of drink is choose
  switch (drink) {
    case "Strong Coffee":
      milkValue = milkValue - 10 * cups;
      coffeeValue = coffeeValue - 8 * cups;
      waterValue = waterValue - 4 * cups;
      costRs += 100 * cups;
      break;
    case "Light Coffee":
      milkValue = milkValue - 15 * cups;
      coffeeValue = coffeeValue - 4 * cups;
      waterValue = waterValue - 4 * cups;
      costRs += 75 * cups;
      break;
    case "Strong Tea":
      milkValue = milkValue - 10 * cups;
      waterValue = waterValue - 8 * cups;
      teaValue = teaValue - 8 * cups;
      costRs += 60 * cups;
      break;
    case "Light Tea":
      milkValue = milkValue - 10 * cups;
      costRs += 50 * cups;
      break;
  }
  if (waterValue <= 0) {
    waterValue = 0;
  }
  if (milkValue <= 0) {
    milkValue = 0;
  }
  if (teaValue <= 0) {
    teaValue = 0;
  }
  if (coffeeValue <= 0) {
    coffeeValue = 0;
  }
  if (sugarValue <= 0) {
    sugarValue = 0;
  }
  printValues(waterValue, milkValue, teaValue, coffeeValue, sugarValue, costRs);
}

// to show the values in stock and on button
function printValues(
  waterValue,
  milkValue,
  teaValue,
  coffeeValue,
  sugarValue,
  costRs
) {
  water.textContent = waterValue;
  milk.textContent = milkValue;
  tea.textContent = teaValue;
  coffee.textContent = coffeeValue;
  sugar.textContent = sugarValue;
  cost.textContent = costRs;
}
