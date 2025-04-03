import '../styles/main.scss';

const hamburgerButton = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

hamburgerButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    hamburgerButton.setAttribute('aria-expanded', isOpen);
});
