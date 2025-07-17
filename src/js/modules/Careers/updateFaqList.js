import { getFaq } from './getFaq.js';
import { ref } from '../../components/settings.js';
import { paste } from './paste.js';
export async function updateFaqList() {
  ref.faqsList.innerHTML = '';
  const data = await getFaq();
  data.forEach(paste);
}
