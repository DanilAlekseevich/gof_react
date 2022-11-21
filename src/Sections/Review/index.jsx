import React from 'react';
import Slider from 'react-slick';

import { Title } from '../../components/Title';
import { ReviewCard } from '../../components/ReviewCard';
import styles from './Review.module.scss';

export function Review() {
  const reviews = [
    {
      name: 'Василий Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      name: 'Василий1 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      name: 'Василий2 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      name: 'Василий3 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      name: 'Василий4 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      name: 'Василий5 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    // variableWidth: true,
  };

  return (
    <section className={styles.review}>
      <div className="container">
        <Title text="Отзывы" />
        <div className={styles.reviewWrapper}>
          <Slider {...settings}>
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
