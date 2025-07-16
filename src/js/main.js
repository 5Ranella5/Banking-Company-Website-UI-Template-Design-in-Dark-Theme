import '../styles/main.scss';
import { ref } from './components/settings.js';
import { initHomePage } from './pages/home.js';
import { initCareersPage } from './pages/careers.js';
import { initLoginPage } from './pages/login.js';

import { initSignupPage } from './pages/signup.js';
import { BurgerModal } from './components/modal/burger-modal.js';
import { initSecurityPage } from './pages/security.js';
console.log(ref.path);
const API_URL = import.meta.env.VITE_API_URL;
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
console.log('import.meta.env:', import.meta.env);

switch (ref.path) {
  case '/':
    initHomePage();
    break;
  case '/careers.html':
    initCareersPage();
    break;
  case '/security.html':
    initSecurityPage();
    break;
  case '/login.html':
    initLoginPage();
    break;
  case '/sign-up.html':
    initSignupPage();
    break;
}

const navLinks = document.querySelectorAll('.header__link');

navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === ref.path) {
    if (href === '/login.html') {
      link.classList.add('active--login');
    } else if (href === '/sign-up.html') {
      link.classList.add('active--signup');
    } else {
      link.classList.add('active');
    }
  }
});

BurgerModal();
