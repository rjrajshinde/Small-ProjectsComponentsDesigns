const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

let count = 0;
value.textContent = count;

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList;
    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "#00a61e";
    } else if (count < 0) {
      value.style.color = "#ff3131";
    } else {
      value.style.color = "#000000";
    }
    value.textContent = count;
  });
});
