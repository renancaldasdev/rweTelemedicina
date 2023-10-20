// JavaScript para alternar o menu
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

function removeIconClose() {
  const closeIcon = document.querySelector(".close-icon img");
  closeIcon.style.display = menu.classList.contains("active")
    ? "block"
    : "none";
}

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  removeIconClose();
});

// JavaScript para fechar o menu ao clicar em um link
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    removeIconClose();
  });
});
