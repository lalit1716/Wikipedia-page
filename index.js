
// Javascript starts here 

var menu_class = document.querySelector('.menu-wrapper');
var menu_class_toggle = document.querySelector('.menu-active');

const menu_toggle = () =>{

    menu_class_toggle.classList.toggle('menu-hide')
}

menu_class.addEventListener('click', ()=> menu_toggle());