import '../styles/main.scss';


/* MENU */

const hamburguerButton = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

hamburguerButton.addEventListener('click', () => {
    hamburguerButton.classList.toggle('active');
    nav.classList.toggle('active');
});