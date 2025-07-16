import { ref } from '../../components/settings.js';

export function paste(elem) {
  ref.faqsList.insertAdjacentHTML(
    'beforeend',
    `<li id="${elem._id}" class="faqs__list-item">
      <h3 class="faqs__item-title">${elem.question}</h3>
      <p class="faqs__item-text">${elem.answer}</p>
      <div class="faqs__wrapper-btn">
        <button class="faqs-editing faqs__btn">Edit</button>
        <button class="faqs-delete faqs__btn">Delete</button>
      </div>
    </li>`
  );
}
