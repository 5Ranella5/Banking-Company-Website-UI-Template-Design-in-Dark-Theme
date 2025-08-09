import { ref } from '../components/settings.js';

export const init404Button = () => {
  ref.button_404.addEventListener('click', () => {
    window.location.href = '/';
  });
  console.log('work');
};
