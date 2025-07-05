import axios from "axios";
import { refs } from "./refs.js";


export async function getFaq() {
  try {
    const res = await axios.get(`https://duriki-bd.onrender.com/faqs?page=${refs.page}`);

    if (res.data.length === 0) {
      return [];
    }

    refs.page++;  

    return res.data;
  } catch (error) {
    console.error("Ошибка при загрузке FAQ:", error);
    return [];
  }
}
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

