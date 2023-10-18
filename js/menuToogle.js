// JavaScript para alternar o menu
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  const closeIcon = document.querySelector(".close-icon");
  closeIcon.style.display = menu.classList.contains("active")
    ? "block"
    : "none";
});

// JavaScript para fechar o menu ao clicar em um link
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
