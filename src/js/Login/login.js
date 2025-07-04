import axios from 'axios';
const ref = {
  first_name: document.querySelector('.first__name'),
  second_name: document.querySelector('.second__name'),
  email: document.querySelector('.email'),
  password: document.querySelector('.password'),
  login_button_login: document.querySelector('.login__button--login'),
  sign_up_button_login: document.querySelector('.login__button--signup'),
};

ref.login_button_login.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Клік по "Login"');
  console.log(ref.email.value);
  console.log(ref.password.value);

  axios
    .post('https://duriki-bd.onrender.com/auth/signin', {
      email: ref.email.value,
      password: ref.password.value,
    })
    .then((response) => {
      console.log('Користувач увійшов:', response.data);
      window.location.href = './index.html';
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

ref.sign_up_button_login.addEventListener('click', () => {
  console.log("Клік по 'Sign Up'");
  window.location.href = './signup.html';
});
