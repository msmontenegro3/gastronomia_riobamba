import '../styles/main.scss';

// Import Swiper core and required modules
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Init Swiper
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Scrollbar], // Aseguramos que los módulos se cargan
  direction: 'horizontal',
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true, // Permite hacer clic en los puntos de paginación
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, // Permite arrastrar el scrollbar
  },
});



// Menu
const hamburgerButton = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

hamburgerButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    hamburgerButton.setAttribute('aria-expanded', isOpen);
});


document.querySelectorAll('a[href="#nosotros"]').forEach(link => {
    link.addEventListener('click', function (e) {
        // Verificar si estamos en la página correcta (index.html o la que contiene la sección)
        if (window.location.pathname.includes('index.html')){
        // Comportamiento normal del ancla
        return true;
      } else {
        // Redirigir a la página correcta primero
        e.preventDefault();
        window.location.href = 'index.html#nosotros';
      }
    });
  });

  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', function (e) {
        // Verificar si estamos en la página correcta (index.html o la que contiene la sección)
        if (window.location.pathname.includes('index.html')){
        // Comportamiento normal del ancla
        return true;
      } else {
        // Redirigir a la página correcta primero
        e.preventDefault();
        window.location.href = 'index.html#contact';
      }
    });
  });