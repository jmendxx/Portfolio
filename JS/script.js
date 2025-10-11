



// Menu Mobile
const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');

btnAbrirMenuMobile.addEventListener('click', ()=> {
    menuMobile.classList.add('mostrar-menu');
});

menuMobile.addEventListener('click', ()=> {
    menuMobile.classList.remove('mostrar-menu');
});
   