import { ClickSlide } from './ClickSlide';
import { GetReviews } from './GetReviews';
import { ref } from '../settings.js';

export const initTestimonialSwiper = () => {
  if (typeof Swiper === 'undefined') {
    console.error('Swiper не завантажено');
    return;
  }

  const swiper = new Swiper('.testimonial__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'slide',
    grabCursor: true,
    loop: false,
    navigation: {
      nextEl: '.testimonial__button--next',
      prevEl: '.testimonial__button--prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  });

  // Клік по слайдам
  ClickSlide(swiper);

  // Кнопка "Next"
  if (ref.button_next) {
    ref.button_next.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      GetReviews(swiper);
      swiper.slideNext();
    });
  }

  // Кнопка "Prev"
  if (ref.button_prev) {
    ref.button_prev.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      swiper.slidePrev();
    });
  }
};
