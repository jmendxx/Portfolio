// Envio de formulario
const form = document.querySelector('#form');

emailjs.init("ckEgYeRX_wlZ02S-J");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm("service_ejcwzts", "template_portfolio", form)

    .then(function() {
        alert("Mensagem enviada com sucesso! 😄");
        form.reset();
    }, function(error) {
        console.log(error);
        alert("Erro ao enviar mensagem 😢 Tente novamente.")
    });
    
   console.log('Passei por aqui');  
}); 

// Menu Mobile
const btnAbrirMenuMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');

btnAbrirMenuMobile.addEventListener('click', ()=> {
    menuMobile.classList.add('mostrar-menu');
});

menuMobile.addEventListener('click', ()=> {
    menuMobile.classList.remove('mostrar-menu');
});
   