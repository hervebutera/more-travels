let barsIcon = document.getElementById('bars-icon');
let navMenu = document.getElementById('nav-menu');
let sub_menu = document.getElementsByClassName('sub-nav-menu');

let activateHamBurgerMenu = () =>{
    navMenu.classList.toggle('show');
};

window.addEventListener('scroll', () => {
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
    for (let index = 0; index < sub_menu.length; index++) {
        sub_menu[index].classList.toggle('on-sticky', window.scrollY > 0);
        
    }
});
if (window.innerWidth <= 850) {
    document.getElementsByClassName('nav-li-destination')[0].addEventListener('click', () => {
        document.getElementsByClassName('sub-nav-menu')[0].classList.toggle('sub-nav-clicked');
    });
    document.getElementsByClassName('nav-li-destination')[1].addEventListener('click', () => {
        document.getElementsByClassName('sub-nav-menu')[1].classList.toggle('sub-nav-clicked');
    }); 
}



