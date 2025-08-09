import axios from 'axios';
import { ref } from '../components/settings.js';
import { SaveToken } from './Login-SigUp/saveToken.js';

export const initLoginButtonLogin = () => {
  ref.login_button_login.addEventListener('click', (e) => {
    e.preventDefault();

    axios
      .post('https://duriki-bd-elfh.onrender.com/auth/signin', {
        email: ref.email.value,
        password: ref.password.value,
      })
      .then((response) => {
        const token = response.data.token;
        const email = ref.email.value;
        SaveToken(response.data, token, email);
        window.location.href = '/';
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            'Помилка входу:',
            error.response.status,
            error.response.data
          );
        } else {
          console.error('Помилка:', error.message);
        }
      });
  });
};

export const initLoginButtonSignUp = () => {
  ref.sign_up_button_login.addEventListener('click', () => {
    window.location.href = '/signup.html';
  });
};
