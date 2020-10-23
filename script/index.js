
let menuToggle = document.querySelector('[data-menu-toggle]');
let sideBarMenu = document.querySelector('.sidebar')

const menuHandler = event =>{
    event.preventDefault();
    sideBarMenu.classList.toggle('burger-active');
    
};

menuToggle.addEventListener('click', event =>menuHandler(event));