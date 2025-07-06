const ref = {
  arr_trigger: document.querySelector('.arr-trigger'),
  arr_container: document.querySelector('.arr-container'),
};
ref.arr_trigger.addEventListener('mouseenter', () => {
  ref.arr_container.classList.add('active');
});

ref.arr_trigger.addEventListener('mouseleave', () => {
  ref.arr_container.classList.remove('active');
});