import axios from "axios";
import { refs } from "./refs.js";



export async function getFaq() {
  try {
    const res = await axios.get(`https://duriki-bd.onrender.com/faqs?page=${refs.page}`);
    console.log(res.data);
    refs.page++
    return res.data; 
  } catch (error) {
    console.error("бляяяяя");
  }
}

function paste(elem) {
  refs.faqsList.insertAdjacentHTML(
    "beforeend",
    `<li class="faqs__list-item">
      <h3 class="faqs__item-title">${elem.question}</h3>
      <p class="faqs__item-text">${elem.answer}</p>
      <div class="faqs__wrapper-btn">
        <button class="faqs-editing faqs__btn">editing</button>
        <button class="faqs-delete faqs__btn">deleting</button>
      </div>
    </li>`
  );
}

refs.loadBtn.addEventListener("click", async () => {
  const data = await getFaq(); 
  data.forEach(paste); 
});
