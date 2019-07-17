const all = document.querySelector('body');
// zmienne burgera
const burger = document.querySelector('.burger');
const iconBurger = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-times');
const main = document.querySelector('.menu');
// zmienne menu
const start = document.querySelector('.startGo');
const about = document.querySelector('.aboutGo');
const offer = document.querySelector('.offertGo');
const project = document.querySelector('.projectGo');
const contact = document.querySelector('.contactGo');
// burger activ
burger.addEventListener('click', function(){
    iconBurger.classList.toggle('show');
    iconX.classList.toggle('show');
    main.classList.toggle('show');

})
// menu activ
start.addEventListener('click', function(){
    iconBurger.classList.toggle("show");
iconX.classList.toggle("show");
main.classList.toggle('show');
})
about.addEventListener('click', function(){
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    main.classList.toggle('show');
})
offer.addEventListener('click', function(){
    iconBurger.classList.toggle("show");
iconX.classList.toggle("show");
main.classList.toggle('show');
})
project.addEventListener('click', function(){
    iconBurger.classList.toggle("show");
iconX.classList.toggle("show");
main.classList.toggle('show');
})
contact.addEventListener('click', function(){
    iconBurger.classList.toggle("show");
iconX.classList.toggle("show");
main.classList.toggle('show');
})
// menu aktywne na klik jquery
$('.startGo').on('click', function () {
    $('body, html').animate({
     scrollTop: $('.start').offset().top
    }, 500)
   })
$('.aboutGo').on('click', function () {
     $('body, html').animate({
      scrollTop: $('.about').offset().top
     }, 500)
    })
    $('.offertGo').on('click', function () {
        $('body, html').animate({
         scrollTop: $('.offer').offset().top
        }, 500)
       })
       $('.projectGo').on('click', function () {
        $('body, html').animate({
         scrollTop: $('.project').offset().top
        }, 500)
       })
       $('.contactGo').on('click', function () {
        $('body, html').animate({
         scrollTop: $('.contact').offset().top
        }, 500)
       })
    //    modal
    const Button = document.querySelector('.button');
    const Modal = document.querySelector('.popup');
    const wrap = document.querySelector('.wrapShow');

    Button.addEventListener('click', function() {
        Modal.classList.toggle("popup");
        Modal.classList.toggle("hidden1");
        wrap.classList.toggle('wrapShow');
    })