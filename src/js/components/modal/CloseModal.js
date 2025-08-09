export const closeModal = (modal) => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

export const handleOutsideClick = (e, modal) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};

export const handleEscapePress = (e, modal) => {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};
