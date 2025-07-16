export const SaveToken = (response, token, email) => {
  localStorage.setItem('email', email);
  if (token) {
    localStorage.setItem('token', token);
    console.log('Токен збережено');
  } else {
    console.warn('Токен відсутній у відповіді:', response);
  }
  window.location.href = './index.html';
};
