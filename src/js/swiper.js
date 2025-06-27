const ClickSlides = (swiper) => {
  ref.slides.addEventListener('click', (e) => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const slideWidth = activeSlide.clientWidth;
    const clickX = e.clientX - activeSlide.getBoundingClientRect().left;

    if (clickX < slideWidth / 2) {
      swiper.slidePrev();
    } else {
      GetGif(swiper);
      swiper.slideNext();
    }
  });
};

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper', {
      effect: 'cards',
      grabCursor: true,
      cardsEffect: {
        perSlideOffset: 10,
        perSlideRotate: 1,
        rotate: true,
        slideShadows: false,
      },
      loop: false,
      // pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true,
      // },
    });

    ClickSlides(swiper);
  } else {
    console.error('Swiper не загружен');
  }
});
