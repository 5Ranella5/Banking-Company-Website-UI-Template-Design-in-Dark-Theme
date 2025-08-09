import { ref } from '../settings.js';

export const CreateSlide = (review) => {
  const newSlide = `
    <div class="testimonial__swiper-slide swiper-slide">
      <div class="testimonial__quotes">
        <div class="testimonial__line"></div>
        <svg class="testimonial__quote-icon">
          <use href="../../img/symbol.svg#quotes"></use>
        </svg>
        <div class="testimonial__line"></div>
      </div>
      <p class="testimonial__text--review">
        ${review.review}
      </p>
      <p class="testimonial__author">${review.author}</p>
    </div>
  `;
  ref.swiper_container.insertAdjacentHTML('beforeend', newSlide);
};
