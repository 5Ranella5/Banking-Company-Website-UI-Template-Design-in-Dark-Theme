
import { refs } from "./refs.js";



export function paste(elem) {
  
  refs.faqsList.insertAdjacentHTML(
    "beforeend",
    `<li id="${elem._id}" class="faqs__list-item">
      <h3 class="faqs__item-title">${elem.question}</h3>
      <p class="faqs__item-text">${elem.answer}</p>
      <div class="faqs__wrapper-btn">
        <button class="faqs-editing faqs__btn">editing</button>
        <button class="faqs-delete faqs__btn">deleting</button>
      </div>
    </li>`
  );
}

