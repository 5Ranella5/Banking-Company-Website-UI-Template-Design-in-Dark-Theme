import { ref } from '../settings.js';
import { GetReviews } from './GetReviews.js';

export const ClickSlide = (swiper) => {
  if (!ref.slides) {
    console.warn('Контейнер слайдів не знайдено');
    return;
  }

  ref.slides.addEventListener('click', (e) => {
    const isRight = e.clientX > window.innerWidth / 2;
    if (isRight) {
      GetReviews(swiper);
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  });
};
