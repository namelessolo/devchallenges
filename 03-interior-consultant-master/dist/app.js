const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", showList);

function showList() {
  list.classList.toggle("list--active");
  logo.classList.toggle("logo--active");
}
