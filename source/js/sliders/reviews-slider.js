import Swiper from 'swiper/bundle';
import { Scrollbar, Navigation } from 'swiper/modules';

const reviewsSlider = document.querySelector('[data-slider="reviews"]');
const buttonNext = document.querySelector('[data-button="reviews-next"]');
const buttonPrev = document.querySelector('[data-button="reviews-prev"]');
const scrollbar = document.querySelector('[data-swiper="reviews-scrollbar"]');

const setSliderReviews = () => {
  new Swiper(reviewsSlider, {
    modules: [Scrollbar, Navigation],
    scrollbar: {
      el: scrollbar,
      draggable: true,
      dragSize: 392,
      hide: false
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        scrollbar: {
          el: '',
          enabled: false,
        },
      },
    },
  });
};

const initSliderReviews = () => {
  if (document.body.contains(reviewsSlider)) {
    setSliderReviews();
  }
};

export {initSliderReviews};
