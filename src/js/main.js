import '../styles/main.scss';

const ref = {
  slide_1: document.querySelector('.swiper-slide-1'),
  slide_2: document.querySelector('.swiper-slide-2'),
  swiper_container: document.querySelector('.swiper-wrapper'),
  slides: document.querySelector('.swiper-testimonial-reviews'),
  button_next: document.querySelector('.swiper-button-next'),
  button_prev: document.querySelector('.swiper-button-prev'),
};

// Створення нового слайду з текстом
const CreateSlide = (text) => {
  if (!ref.swiper_container) return;

  const newSlide = `<div class="swiper-slide"><p>${text}</p></div>`;
  ref.swiper_container.insertAdjacentHTML('beforeend', newSlide);
};

// Завантаження нового GIF і додавання нового слайду
const GetGif = (swiper) => {
  fetch('https://yesno.wtf/api')
    .then((response) => {
      if (!response.ok) throw new Error('HTTP error ' + response.status);
      return response.json();
    })
    .then((data) => {
      CreateSlide(data.answer);
      swiper.update(); // Оновлюємо swiper після додавання слайду
    })
    .catch((error) => console.error('Помилка завантаження нового GIF:', error));
};

// Клік по слайду (вліво — назад, вправо — новий + вперед)
const ClickSlides = (swiper) => {
  if (!ref.slides) {
    console.warn('Контейнер слайдів не знайдено');
    return;
  }

  ref.slides.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const slides = document.querySelectorAll('.swiper-slide');
    const activeIndex = swiper.activeIndex;
    const activeSlide = slides[activeIndex];

    if (!activeSlide) {
      console.warn('Активний слайд не знайдено');
      return;
    }

    const rect = activeSlide.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
      swiper.slidePrev();
    } else {
      GetGif(swiper);
      swiper.slideNext();
    }
  });
};

// Основний запуск після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper === 'undefined') {
    console.error('Swiper не завантажено');
    return;
  }

  const swiper = new Swiper('.swiper-testimonial-reviews', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'slide',
    grabCursor: true,

    loop: false,
    navigation: {
      nextEl: '.swiper-button-next', // ← добавь родителя
      prevEl: '.swiper-button-prev',
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

  // Ініціалізація\
  ClickSlides(swiper);

  // Обробка кнопки "Next"
  if (ref.button_next) {
    ref.button_next.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      GetGif(swiper);
      swiper.slideNext();
    });
  }

  // Обробка кнопки "Prev"
  if (ref.button_prev) {
    ref.button_prev.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      swiper.slidePrev();
    });
  }
});
