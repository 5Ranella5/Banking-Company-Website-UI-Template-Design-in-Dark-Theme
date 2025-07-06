import { refs } from "./refs.js";
import { deleteFaq } from "./deleteFaq.js";

export async function deletingFaqBase() {
  refs.faqsList.addEventListener("click", async (e) => {
    // deleting
    let onDeleteConfirm;
    if (e.target.classList.contains("faqs-delete")) {
      refs.deleteModal.style.display = "block";
      document.body.style.overflow = "hidden";

      if (onDeleteConfirm) {
        refs.submitDelete.removeEventListener("click", onDeleteConfirm);
      }

      onDeleteConfirm = async () => {
        refs.deleteModal.style.display = "none";
        document.body.style.overflow = "auto";
        let card = e.target.closest("li");
        await deleteFaq(card.id);
        card.remove();

        refs.submitDelete.removeEventListener("click", onDeleteConfirm);
        onDeleteConfirm = null;
      };

      refs.submitDelete.addEventListener("click", onDeleteConfirm);
    }
  });
}
