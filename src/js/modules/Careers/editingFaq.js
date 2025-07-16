import axios from 'axios';

export async function editingFaq(id, question, answer) {
  const token = localStorage.getItem('token');
  try {
    await axios.put(
      `https://duriki-bd.onrender.com/faqs/${id}`,
      {
        question: question,
        answer: answer,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    if (error.response) {
      console.error(
        '❌ Помилка редагуваня FAQ',
        error.response.status,
        error.response.data
      );
    } else {
      console.error('иди нах', error.message);
    }
  }
}
