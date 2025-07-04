import axios from 'axios';
const ref = {
  first_name: document.querySelector('.first__name'),
  second_name: document.querySelector('.second__name'),
  email: document.querySelector('.email'),
  password: document.querySelector('.password'),
  login_button_signup: document.querySelector('.signup__button--login'),
  sign_up_button_signup: document.querySelector('.signup__button--signup'),
};

ref.sign_up_button_signup.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Клік по "Sign up"');

  axios
    .post('https://duriki-bd.onrender.com/auth/signup', {
      firstName: ref.first_name.value,
      secondName: ref.second_name.value,
      email: ref.email.value,
      password: ref.password.value,
    })
    .then((response) => {
      const token = response.data.token;
      const date = response.data;
      console.log(date);
      const email = ref.email.value;
      localStorage.setItem('username', email);
      console.log('Отриманий токен:', token);
      if (token) {
        localStorage.setItem('token', token);
        console.log('Токен збережено');
      } else {
        console.warn('Токен відсутній у відповіді:', response.data);
      }
      console.log('Користувач зареєстрований:', response.data);
      window.location.href = './index.html';
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

ref.login_button_signup.addEventListener('click', () => {
  window.location.href = './login.html';
});
