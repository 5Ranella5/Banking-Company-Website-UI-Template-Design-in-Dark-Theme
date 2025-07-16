import { CreateSlide } from './CreateSlide';
import axios from 'axios';

export const GetReviews = (swiper) => {
  axios
    .get('https://duriki-bd.onrender.com/reviews')
    .then((response) => {
      const reviews = response.data;
      console.log(reviews);

      const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
      CreateSlide(randomReview);
      swiper.update();
    })
    .catch((error) => {
      console.error('Помилка завантаження відгуку:', error);
    });
};
