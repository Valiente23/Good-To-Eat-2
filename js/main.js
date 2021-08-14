function deslizarNav() {
  let burgerMenu = document.querySelector(".menu__icon");
  if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
      let navResponsive = document.querySelector(".nav__container");
      navResponsive.classList.toggle("show-nav");
    });
  }
}
function deslizarRecetas(id) {
    let receta = document.querySelectorAll(".card__item")[id];
    receta.addEventListener("click", () => {
      let receta = document.querySelectorAll(".card__item")[id];
      receta.classList.toggle("show-instructions");
      let instrucciones = document.querySelectorAll(`.card__instructions`)[id];
      instrucciones.classList.toggle("show-recetas");
    });
}

let recetas = document.querySelectorAll(".card__item")
for (let i = 0; i < recetas.length; i++) {
  deslizarRecetas(i);
}

deslizarNav();