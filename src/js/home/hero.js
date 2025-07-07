import { root } from "./js/root.js";

root.arr_trigger.addEventListener('mouseenter', () => {
  root.arr_container.classList.add('active');
});

root.arr_trigger.addEventListener('mouseleave', () => {
  root.arr_container.classList.remove('active');
});