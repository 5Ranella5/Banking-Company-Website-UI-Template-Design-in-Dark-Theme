// logout: document.querySelector('.logout'),
// text_username: document.querySelector('.text-username'),

// posts_list: document.querySelector('.posts-list'),
// posts_list__edit: document.querySelector('.posts-list__edit'),
// posts_list__delete: document.querySelector('.posts-list__delete'),

// create_post: document.querySelector('.create-post'),

// modal_create_post: document.querySelector('.modal-create-post'),
// modal_create_post__title: document.querySelector('.modal-create-post__title'),
// modal_create_post__content: document.querySelector(
//   '.modal-create-post__content'
// ),
// modal_create_post__button: document.querySelector(
//   '.modal-create-post__button'
// ),

// modal_edit_post: document.querySelector('.modal-edit-post'),
// modal_edit_post__title: document.querySelector('.modal-edit-post__title'),
// modal_edit_post__content: document.querySelector('.modal-edit-post__content'),
// modal_edit_post__button: document.querySelector('.modal-edit-post__button'),

// modal_delete_post_yes: document.querySelector('.modal-delete-post__yes'),
// modal_delete_post_no: document.querySelector('.modal-delete-post__no'),
// modal_edit_post_no: document.querySelector('.modal-edit-post__no'),
// modal_create_post_no: document.querySelector('.modal-create-post__no'),

// ref.logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('Клік по "Logout"');
//   const token = localStorage.getItem('token');
//   axios
//     .post(
//       'https://back-w6yb.onrender.com/auth/logout',
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//     .then((response) => {
//       console.log('✅ Користувач вийшов:', response.data);
//       localStorage.removeItem('token');
//       ref.modal_registration.classList.remove('hidden');
//       ref.posts_list.innerHTML = '';
//     })
//     .catch((error) => {
//       console.error('❌ Помилка у виході користувача:', error);
//     });
// });

// ref.create_post.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('Клік по "Create Post"');
//   ref.modal_create_post.classList.remove('hidden');
// });

// ref.modal_create_post__button.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('Клік по "Create"');
//   const token = localStorage.getItem('token');
//   if (!token) {
//     console.warn('⛔ Токен не знайдено — користувач не авторизований');
//     return;
//   }
//   axios
//     .post(
//       'https://back-w6yb.onrender.com/posts',
//       {
//         title: ref.modal_create_post__title.value,
//         content: ref.modal_create_post__content.value,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//     .then((response) => {
//       console.log('✅ Пост створено:', response.data);
//       ref.modal_create_post.classList.add('hidden');
//       LoadPosts();
//     })
//     .catch((error) => {
//       console.error('❌ Пост не створено:', error);
//     });
// });

// ref.posts_list.addEventListener('click', (e) => {
//   const postCard = e.target.closest('li');
//   currentPostId = postCard.dataset.id;
//   console.log('ID поста:', currentPostId);
//   if (e.target.classList.contains('posts-list__edit')) {
//     const title = postCard.querySelector('h3').textContent;
//     const content = postCard.querySelector('p').textContent;
//     ref.modal_edit_post.classList.remove('hidden');
//     ref.modal_edit_post__title.value = title;
//     ref.modal_edit_post__content.value = content;
//   }
//   if (e.target.classList.contains('posts-list__delete')) {
//     ref.modal_delete_post.classList.remove('hidden');
//   }
// });

// ref.modal_delete_post_yes.addEventListener('click', (e) => {
//   e.preventDefault();
//   const token = localStorage.getItem('token');
//   axios
//     .delete(`https://back-w6yb.onrender.com/posts/${currentPostId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response) => {
//       console.log('✅ Пост видалено:', response.data);
//       ref.modal_delete_post.classList.add('hidden');
//       LoadPosts();
//       currentPostId = null;
//     })
//     .catch((error) => {
//       console.error('❌ Помилка при оновленні поста:', error);
//     });
// });

// ref.modal_edit_post__button.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (!currentPostId) {
//     console.warn('⚠️ Пост не вибрано для редагування');
//     return;
//   }
//   const token = localStorage.getItem('token');
//   axios
//     .put(
//       `https://back-w6yb.onrender.com/posts/${currentPostId}`,
//       {
//         title: ref.modal_edit_post__title.value,
//         content: ref.modal_edit_post__content.value,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//     .then((response) => {
//       console.log('✅ Пост оновлено:', response.data);
//       ref.modal_edit_post.classList.add('hidden');
//       LoadPosts();
//       currentPostId = null;
//     })
//     .catch((error) => {
//       console.error('❌ Помилка при оновленні поста:', error);
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const themeToggle = document.querySelector('.theme-toggle');

//   const savedTheme = localStorage.getItem('theme');
//   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
//     document.documentElement.classList.add('dark');
//   } else {
//     document.documentElement.classList.remove('dark');
//   }

//   if (themeToggle) {
//     themeToggle.addEventListener('click', () => {
//       const isDark = document.documentElement.classList.toggle('dark');
//       localStorage.setItem('theme', isDark ? 'dark' : 'light');
//     });
//   }
//   const token = localStorage.getItem('token');
//   if (token) {
//     console.log('Користувач авторизований через збережений токен');
//     ref.modal_registration.classList.add('hidden');
//     LoadPosts();
//   } else {
//     console.log('Користувач не авторизований');
//   }
//   const savedUsername = localStorage.getItem('username');
//   if (savedUsername) {
//     ref.text_username.textContent = savedUsername;
//   }
// });

// const GetGif1 = (swiper) => {
//   fetch('https://yesno.wtf/api')
//     .then((response) => {
//       if (!response.ok) throw new Error('HTTP error ' + response.status);
//       return response.json();
//     })
//     .then((data) => {
//       CreateSlide(data.answer);
//       swiper.update(); // Оновлюємо swiper після додавання слайду
//     })
//     .catch((error) => console.error('Помилка завантаження нового GIF:', error));
// };
