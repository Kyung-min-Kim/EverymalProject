const menu = document.querySelector(".firstMenu>a");
const subBar = document.querySelector(".firstMenu .secondMenu");

let subToggle = true;
function show_sub() {
  if (subToggle) {
    subBar.style.color = "red";
    subToggle = !subToggle;
  } else {
    subBar.style.height = "0px";
    subToggle = !subToggle;
  }
}

menu.addEventListener("click", show_sub);
