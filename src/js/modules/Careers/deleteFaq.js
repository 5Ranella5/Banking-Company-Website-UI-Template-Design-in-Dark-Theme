import axios from 'axios';

export async function deleteFaq(id) {
  const token = localStorage.getItem('token');
  try {
    await axios.delete(`https://duriki-bd-elfh.onrender.com/faqs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    if (error.response) {
      console.error(
        'помилка видалення FAQ',
        error.response.status,
        error.response.data
      );
    } else {
      console.error('иди нах', error.message);
    }
  }
}
