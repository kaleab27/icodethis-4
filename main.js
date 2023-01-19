import "./style.css";

let card = document.querySelector(".card");
let profileIcon = document.querySelector(".profile-icon");

document.addEventListener("click", (e) => {
  if (e.target !== card && !card.classList.contains("hidden")) {
    card.classList.toggle("hidden");
    console.log("remove");
  }
});

profileIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  card.classList.toggle("hidden");
  console.log("toggle");
});
