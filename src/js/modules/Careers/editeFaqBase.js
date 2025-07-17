import {
  closeModal,
  handleEscapePress,
  handleOutsideClick,
} from '../../components/modal/CloseModal.js';
import { ref } from '../../components/settings.js';
import { editingFaq } from './editingFaq.js';
import { updateFaqList } from './updateFaqList.js';

export async function editeFaqBase() {
  let currentEditId = null;

  ref.faqsList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('faqs-editing')) {
      ref.editModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      let card = e.target.closest('li');
      currentEditId = card.id;

      let question = card.querySelector('.faqs__item-title').textContent;
      let answer = card.querySelector('.faqs__item-text').textContent;

      ref.editQuestion.value = question;
      ref.editAnswer.value = answer;
    }
  });
  ref.editClose.addEventListener('click', () => closeModal(editModal));

  ref.editModal.addEventListener('click', (e) =>
    handleOutsideClick(e, editModal)
  );

  document.addEventListener('keydown', (e) => handleEscapePress(e, editModal));

  ref.editSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!currentEditId) return;

    let newQuestion = ref.editQuestion.value.trim();
    let newAnswer = ref.editAnswer.value.trim();

    if (!newQuestion || !newAnswer) {
      alert('Пожалуйста, заполните и вопрос, и ответ.');
      return;
    }

    ref.editModal.style.display = 'none';
    document.body.style.overflow = 'auto';

    await editingFaq(currentEditId, newQuestion, newAnswer);
    ref.page = 1;
    await updateFaqList();

    currentEditId = null;
  });
}
