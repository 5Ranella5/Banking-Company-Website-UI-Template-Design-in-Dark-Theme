import { getFaq } from "./getFaq.js";
import { refs } from "./refs.js";
import { paste } from "./getFaq.js";
export async function updateFaqList() {
  refs.faqsList.innerHTML = ""; 
  const data = await getFaq();
  data.forEach(paste);
}
