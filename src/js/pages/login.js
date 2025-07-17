import { initTestimonialSwiper } from '../components/swiper/swiper.js';
import {
  initLoginButtonLogin,
  initLoginButtonSignUp,
} from '../modules/functionLogin.js';

export const initLoginPage = () => {
  initTestimonialSwiper();
  initLoginButtonLogin();
  initLoginButtonSignUp();
};
