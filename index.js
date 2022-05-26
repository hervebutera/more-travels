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
let i = 0;
while (i < 2) {
    document.getElementsByClassName('.nav-li-destination')[i].addEventListener('click', activateHamBurgerMenu());
    i++;
}



