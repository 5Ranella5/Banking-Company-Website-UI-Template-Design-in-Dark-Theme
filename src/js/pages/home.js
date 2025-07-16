import { initTestimonialSwiper } from '../components/swiper/swiper.js';
import { initCases } from '../modules/functionCases';
import { initFaqs } from '../modules/functionFaqs.js';
import { initHero } from '../modules/functionHome.js';
import { initProducts } from '../modules/functionProducts.js';

export const initHomePage = () => {
  initTestimonialSwiper();
  initHero();
  initProducts();
  initFaqs();
  initCases();
};
