import '../styles/main.scss';
import { ref } from './components/settings.js';
import { initHomePage } from './pages/home.js';
import { initCareersPage } from './pages/careers.js';
import { initLoginPage } from './pages/login.js';
import { initSignupPage } from './pages/signup.js';
import { BurgerModal } from './components/modal/burger-modal.js';
import { initSecurityPage } from './pages/security.js';
import { init404Page } from './pages/page-404.js';
console.log(`1.${ref.path}`);
const baseURL = import.meta;
console.log(import.meta.env);

switch (ref.path) {
  case '/':
    initHomePage();
    break;
  case '/careers.html':
    initCareersPage();
    break;
  case '/about.html':
    if (ref.path != '/about.html') {
      window.location.href = '/about.html';
    }
    break;
  case '/security.html':
    initSecurityPage();
    break;
  case '/login.html':
    initLoginPage();
    break;
  case '/signup.html':
    initSignupPage();
    break;
  case '/page-404.html':
    init404Page();
    break;
  default:
    if (ref.path != '/page-404.html') {
      window.location.href = '/page-404.html';
    }
    break;
}

const navLinks = document.querySelectorAll('.header__link');

navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === ref.path) {
    if (href === '/login.html') {
      link.classList.add('active--login');
    } else if (href === '/signup.html') {
      link.classList.add('active--signup');
    } else {
      link.classList.add('active');
    }
  }
});

window.addEventListener('load', () => {
  ref.loader.remove();
  ref.page.classList.remove('hidden');
});

BurgerModal();
