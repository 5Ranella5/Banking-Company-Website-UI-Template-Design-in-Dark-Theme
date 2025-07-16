import { ref } from '../components/settings.js';

export const initProducts = () => {
  ref.btn_individuals.addEventListener('click', () => {
    ref.product_list.classList.add('individuals__active');
    ref.product_list.classList.remove('businesses__active');
  });

  ref.btn_businesses.addEventListener('click', () => {
    ref.product_list.classList.add('businesses__active');
    ref.product_list.classList.remove('individuals__active');
  });
};
