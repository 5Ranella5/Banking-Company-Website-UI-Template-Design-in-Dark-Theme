import {refs} from "./refs.js"
import { createFaq } from "./createFaq.js";


export async function createFaqBase() {
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
}
