import { ref } from '../settings.js';
import { handleEscapePress, handleOutsideClick } from './CloseModal.js';
import { openModal } from './OpenModal.js';

export const BurgerModal = () => {
  if (ref.burger_button) {
    ref.burger_button.addEventListener('click', () =>
      openModal(ref.modal_burger)
    );

    ref.modal_burger.addEventListener('click', (e) =>
      handleOutsideClick(e, ref.modal_burger)
    );

    document.addEventListener('keydown', (e) =>
      handleEscapePress(e, ref.modal_burger)
    );
  }
};
