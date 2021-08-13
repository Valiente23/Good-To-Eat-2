
function deslizarNav(){
  let burgerMenu = document.querySelector(".menu__icon")
  if(burgerMenu){
    burgerMenu.addEventListener('click', ()=>{
      let navResponsive = document.querySelector(".nav__container")
      navResponsive.classList.toggle('show-nav')
    })
  }
}
deslizarNav();

