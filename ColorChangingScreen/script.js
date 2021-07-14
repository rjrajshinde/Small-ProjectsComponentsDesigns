const body = document.body;
const btn = document.querySelector("button");

function changeColor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // var hexCode =
  //   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  // document.querySelector("span").innerText = hexCode;
  var hexCode = "#" + ((r << 16) | (g << 8) | b).toString(16).toUpperCase();
  document.querySelector("#span").innerText = hexCode;
}

btn.addEventListener("click", changeColor);
