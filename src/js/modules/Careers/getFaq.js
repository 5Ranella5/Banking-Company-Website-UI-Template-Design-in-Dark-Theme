import axios from 'axios';
import { ref } from '../../components/settings.js';

export async function getFaq() {
  try {
    const res = await axios.get(
      `https://duriki-bd.onrender.com/faqs?page=${ref.page}`
    );

    if (res.data.length === 0) {
      return [];
    }

    ref.page++;

    return res.data;
  } catch (error) {
    console.error('Ошибка при загрузке FAQ:', error);
    return [];
  }
}
