const btn = document.querySelector(".searchButton");
const input = document.querySelector(".input");
const div = document.querySelector(".searchDiv");

btn.addEventListener("click", () => {
  div.classList.toggle("active");
  input.focus();
});
