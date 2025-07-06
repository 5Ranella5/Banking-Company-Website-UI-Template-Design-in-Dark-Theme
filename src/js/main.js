import "../styles/main.scss";
import { getFaq } from "./careersJS/getFaq.js";
import { paste } from "./careersJS/paste.js";
import { createFaq } from "./careersJS/createFaq.js";
import { refs } from "./careersJS/refs.js";
import { deleteFaq } from "./careersJS/deleteFaq.js";
import { hideButtonsIfNotAuthorized } from "./careersJS/hideButtonsIfNotAuthorized.js";
import { editingFaq } from "./careersJS/editingFaq.js";
import { updateFaqList } from "./careersJS/updateFaqList.js";
import { createFaqBase } from "./careersJS/createFaqbase.js";
import { deletingFaqBase } from "./careersJS/deletingFaqBase.js";
import { editeFaqBase } from "./careersJS/editeFaqBase.js";
//свайпер//
const ref = {
  swiper_container: document.querySelector(".swiper-wrapper"),
  slides: document.querySelector(".swiper-testimonial-reviews"),
  button_next: document.querySelector(".swiper-button-next"),
  button_prev: document.querySelector(".swiper-button-prev"),
  modal_registration: document.querySelector(".modal-registration"),
  burger_button: document.querySelector(".burger-button-work"),
  modal_burger: document.querySelector(".modal-burger"),
};

// Створення нового слайду з текстом
const CreateSlide = (text) => {
  if (!ref.swiper_container) return;

  const newSlide = `
  <div class="swiper-slide swiper-slide-2">
  <div class="container-testimonial-reviews-quotes">
  <div class="line-testimonial"></div>
            <svg class="quotes-img">
              <use href="../../img/Login/modal-login/quotes.svg#quotes"></use>
            </svg>
            <div class="line-testimonial"></div>
          </div>
          <p class="text-testimonial-reviews">
            I recently started my own business, and YourBank has been
            instrumental in helping me set up my business accounts and secure
            the financing I needed. Their expert guidance and tailored solutions
            have been invaluable.
          </p>
          <p class="name-testimonial-reviews">John D</p>
        </div>`;
  ref.swiper_container.insertAdjacentHTML("beforeend", newSlide);
};

// Завантаження нового GIF і додавання нового слайду
const GetGif = (swiper) => {
  fetch("https://yesno.wtf/api")
    .then((response) => {
      if (!response.ok) throw new Error("HTTP error " + response.status);
      return response.json();
    })
    .then((data) => {
      CreateSlide(data.answer);
      swiper.update(); // Оновлюємо swiper після додавання слайду
    })
    .catch((error) => console.error("Помилка завантаження нового GIF:", error));
};

// Клік по слайду (вліво — назад, вправо — новий + вперед)
const ClickSlides = (swiper) => {
  if (!ref.slides) {
    console.warn("Контейнер слайдів не знайдено");
    return;
  }

  ref.slides.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const slides = document.querySelectorAll(".swiper-slide");
    const activeIndex = swiper.activeIndex;
    const activeSlide = slides[activeIndex];

    if (!activeSlide) {
      console.warn("Активний слайд не знайдено");
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
document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper === "undefined") {
    console.error("Swiper не завантажено");
    return;
  }

  const swiper = new Swiper(".swiper-testimonial-reviews", {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "slide",
    grabCursor: true,

    loop: false,
    navigation: {
      nextEl: ".swiper-button-next", // ← добавь родителя
      prevEl: ".swiper-button-prev",
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
    ref.button_next.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      GetGif(swiper);
      swiper.slideNext();
    });
  }

  // Обробка кнопки "Prev"
  if (ref.button_prev) {
    ref.button_prev.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      swiper.slidePrev();
    });
  }
});

///вход и реестация///

// import LoadPosts from './js/LoadPosts.js'
// import {ref} from './js/Settings.js';
// let currentPostId = null;

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll(".nav__link");

console.log(currentPath);

navLinks.forEach((link) => {
  console.log(link.getAttribute("href"));
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

const closeModal = (modal) => {
  modal.classList.remove("hidden");
};

ref.burger_button.addEventListener("click", () => {
  console.log("Тикаю");
  closeModal(ref.modal_burger);
});























// faqs

if (refs.page === 1) {
  const data = await getFaq();
  data.forEach(paste);
  // hideButtonsIfNotAuthorized();
}
refs.loadBtn.addEventListener("click", async () => {
  const data = await getFaq();
  data.forEach(paste);
  // hideButtonsIfNotAuthorized();
});
// create
createFaqBase()
// delete
deletingFaqBase()
// edite
editeFaqBase()







