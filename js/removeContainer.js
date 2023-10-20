// Selecione o elemento pelo ID
let elemento = document.querySelector(".banner-hero");
let container1 = document.querySelector(".banner-equipment");
let container2 = document.querySelector(".banner-loaner--devices");

// Função para verificar a largura da tela e remover a classe
function verificarLargura() {
  if (window.innerWidth <= 768) {
    // Substitua 768 pela largura desejada
    elemento.classList.remove("container");
    container1.classList.add("container");
    container2.classList.add("container");
  } else {
    elemento.classList.add("container");
    container1.classList.remove("container");
    container2.classList.remove("container");
  }
}

// Chame a função na carga da página e redimensionamento da tela
window.addEventListener("load", verificarLargura);
window.addEventListener("resize", verificarLargura);
