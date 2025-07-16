import axios from 'axios';
import { ref } from '../components/settings.js';
import { SaveToken } from './Login-SigUp/saveToken.js';

export const initSignUpButtonSignUp = () => {
  ref.sign_up_button_signup.addEventListener('click', (e) => {
    e.preventDefault();

    axios
      .post('https://duriki-bd.onrender.com/auth/signup', {
        firstName: ref.first_name.value,
        secondName: ref.second_name.value,
        email: ref.email.value,
        password: ref.password.value,
      })
      .then((response) => {
        const token = response.data.token;
        const email = ref.email.value;
        SaveToken(response.data, token, email);
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            '❌ Помилка реєстрації:',
            error.response.status,
            error.response.data
          );
        } else {
          console.error('❌ Помилка:', error.message);
        }
      });
  });
};

export const initSignUpButtonLogin = () => {
  ref.login_button_signup.addEventListener('click', () => {
    window.location.href = './login.html';
  });
};
