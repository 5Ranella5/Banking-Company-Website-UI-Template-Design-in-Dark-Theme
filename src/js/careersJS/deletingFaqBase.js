import { refs } from "./refs.js";
import { deleteFaq } from "./deleteFaq.js";

export function deletingFaqBase() {
  refs.faqsList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("faqs-delete")) return;

    const card = e.target.closest("li");
    if (!card) return;

    refs.deleteModal.style.display = "block";
    document.body.style.overflow = "hidden";

    const onDeleteConfirm = async () => {
      refs.deleteModal.style.display = "none";
      document.body.style.overflow = "auto";
      await deleteFaq(card.id);
      card.remove();
      refs.submitDelete.removeEventListener("click", onDeleteConfirm);
    };

    refs.submitDelete.addEventListener("click", onDeleteConfirm, {
      once: true,
    });
  });
}
