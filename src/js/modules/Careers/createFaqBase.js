import {
  closeModal,
  handleEscapePress,
  handleOutsideClick,
} from '../../components/modal/CloseModal.js';
import { ref } from '../../components/settings.js';
import { createFaq } from './createFaq.js';
import { getFaq } from './getFaq.js';

export async function createFaqBase() {
  ref.creatingQuestionsBtn.addEventListener('click', () => {
    ref.createModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  ref.createClose.addEventListener('click', () => closeModal(createModal));

  ref.createModal.addEventListener('click', (e) =>
    handleOutsideClick(e, createModal)
  );

  document.addEventListener('keydown', (e) =>
    handleEscapePress(e, createModal)
  );

  ref.createSubmit.addEventListener('click', async (e) => {
    e.preventDefault();

    const question = ref.createQuestion.value.trim();
    const answer = ref.createAnswer.value.trim();

    if (!question || !answer) {
      alert('Пожалуйста, заполните и вопрос, и ответ.');
      return;
    }
    ref.createModal.style.display = 'none';
    await createFaq(question, answer);

    document.body.style.overflow = 'auto';
    ref.createQuestion.value = '';
    ref.createAnswer.value = '';
    await getFaq();
  });
}
