import "../styles/main.scss";
import { getFaq } from "./careersJS/getFaq.js";
import { paste } from "./careersJS/getFaq.js";
import { createFaq } from "./careersJS/createFaq.js";
import { refs } from "./careersJS/refs.js";
import { deleteFaq } from "./careersJS/deleteFaq.js";
import { hideButtonsIfNotAuthorized } from "./careersJS/hideButtonsIfNotAuthorized.js";
import { editingFaq } from "./careersJS/editingFaq.js";
import { updateFaqList } from "./careersJS/updateFaqList.js";
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
  hideButtonsIfNotAuthorized();
}
refs.loadBtn.addEventListener("click", async () => {
  const data = await getFaq();
  data.forEach(paste);
  hideButtonsIfNotAuthorized();
});

// create
refs.creatingQuestionsBtn.addEventListener("click", () => {
  refs.createModal.style.display = "block";
  document.body.style.overflow = "hidden";
});

refs.createClose.addEventListener("click", () => {
  refs.createModal.style.display = "none";
  document.body.style.overflow = "auto";
});

refs.createSubmit.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(e);

  const question = refs.createQuestion.value.trim();
  const answer = refs.createAnswer.value.trim();

  if (!question || !answer) {
    alert("Пожалуйста, заполните и вопрос, и ответ.");
    return;
  }
  refs.createModal.style.display = "none";
  await createFaq(question, answer);

  document.body.style.overflow = "auto";
  refs.createQuestion.value = "";
  refs.createAnswer.value = "";
  await getFaq();
});
let currentEditId = null;
let onDeleteConfirm;
refs.faqsList.addEventListener("click", async (e) => {
  // deleting
  if (e.target.classList.contains("faqs-delete")) {
    refs.deleteModal.style.display = "block";
    document.body.style.overflow = "hidden";

    if (onDeleteConfirm) {
      refs.submitDelete.removeEventListener("click", onDeleteConfirm);
    }

    onDeleteConfirm = async () => {
      refs.deleteModal.style.display = "none";
      document.body.style.overflow = "auto";
      let card = e.target.closest("li");
      await deleteFaq(card.id);
      card.remove();

      refs.submitDelete.removeEventListener("click", onDeleteConfirm);
      onDeleteConfirm = null;
    };

    refs.submitDelete.addEventListener("click", onDeleteConfirm);
  }
  // editing
  if (e.target.classList.contains("faqs-editing")) {
    refs.editeModal.style.display = "block";
    document.body.style.overflow = "hidden";
    let card = e.target.closest("li");
    currentEditId = card.id;

    let question = card.querySelector(".faqs__item-title").textContent;
    let answer = card.querySelector(".faqs__item-text").textContent;

    refs.editeQuestion.value = question;
    refs.editeAnswer.value = answer;
  }
});
refs.editeClose.addEventListener("click", () => {
  refs.editeModal.style.display = "none";
  document.body.style.overflow = "auto";
  currentEditId = null;
});

refs.editeSubmit.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!currentEditId) return;

  let newQuestion = refs.editeQuestion.value.trim();
  let newAnswer = refs.editeAnswer.value.trim();

  if (!newQuestion || !newAnswer) {
    alert("Пожалуйста, заполните и вопрос, и ответ.");
    return;
  }

  refs.editeModal.style.display = "none";
  document.body.style.overflow = "auto";

  await editingFaq(currentEditId, newQuestion, newAnswer);
  refs.page = 1;
  await updateFaqList();

  currentEditId = null;
});
