import axios from 'axios';

export async function createFaq(question, answer) {
  const token = localStorage.getItem('token');

  try {
    await axios.post(
      'https://duriki-bd-elfh.onrender.com/faqs',
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
        '❌ Помилка створення FAQ:',
        error.response.status,
        error.response.data
      );
    } else {
      console.error('❌ Помилка:', error.message);
    }
  }
}
