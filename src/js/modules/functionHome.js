import { ref } from '../components/settings.js';

export const initHero = () => {
  ref.arr_trigger.addEventListener('mouseenter', () => {
    ref.arr_container.classList.add('active');
  });

  ref.arr_trigger.addEventListener('mouseleave', () => {
    ref.arr_container.classList.remove('active');
  });
};
