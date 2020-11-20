const hamburger = document.querySelectorAll(".hamburger");
const list = document.querySelector(".list");
const logo = document.querySelector(".logo");
const mobile = document.querySelector(".hamburger__mobile");

hamburger.forEach((btn) => btn.addEventListener("click", showList));

function showList() {
  list.classList.toggle("list--active");
  mobile.classList.toggle("hamburger__mobile--active");
}
