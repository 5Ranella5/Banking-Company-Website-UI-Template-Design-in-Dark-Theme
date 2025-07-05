export function hideButtonsIfNotAuthorized() {
  if (!localStorage.getItem("token")) {
    document
      .querySelectorAll(".faqs-delete")
      .forEach((btn) => (btn.style.display = "none"));
    document
      .querySelectorAll(".faqs-editing")
      .forEach((btn) => (btn.style.display = "none"));
      document
      .querySelectorAll(".faqs-creating")
      .forEach((btn) => (btn.style.display = "none"));
    document.querySelectorAll(".faqs__item-text").forEach((el) => {
      el.style.margin = 0;
    });
  }
}


