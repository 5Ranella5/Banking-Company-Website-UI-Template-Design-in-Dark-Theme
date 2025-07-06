import { refs } from "./refs.js";
import { editingFaq } from "./editingFaq.js";
import { updateFaqList } from "./updateFaqList.js";

export async function editeFaqBase() {
  let currentEditId = null;

  refs.faqsList.addEventListener("click", async (e) => {
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
}
