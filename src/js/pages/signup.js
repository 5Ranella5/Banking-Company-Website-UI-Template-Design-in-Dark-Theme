import { initTestimonialSwiper } from '../components/swiper/swiper.js';
import {
  initSignUpButtonLogin,
  initSignUpButtonSignUp,
} from '../modules/functionSignUp.js';

export const initSignupPage = () => {
  initTestimonialSwiper();
  initSignUpButtonSignUp();
  initSignUpButtonLogin();
};
