import {
  closeModal,
  handleEscapePress,
  handleOutsideClick,
} from '../../components/modal/CloseModal.js';
import { ref } from '../../components/settings.js';
import { deleteFaq } from './deleteFaq.js';

export function deletingFaqBase() {
  ref.faqsList.addEventListener('click', (e) => {
    if (!e.target.classList.contains('faqs-delete')) return;

    const card = e.target.closest('li');
    if (!card) return;

    ref.deleteModal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const onDeleteConfirm = async () => {
      ref.deleteModal.style.display = 'none';
      document.body.style.overflow = 'auto';
      await deleteFaq(card.id);
      card.remove();
      ref.deleteSubmit.removeEventListener('click', onDeleteConfirm);
    };

    ref.deleteSubmit.addEventListener('click', onDeleteConfirm, {
      once: true,
    });
    ref.deleteClose.addEventListener('click', () => closeModal(deleteModal));

    ref.deleteModal.addEventListener('click', (e) =>
      handleOutsideClick(e, deleteModal)
    );

    document.addEventListener('keydown', (e) =>
      handleEscapePress(e, deleteModal)
    );
  });
}
