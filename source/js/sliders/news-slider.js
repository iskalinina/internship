import Swiper from 'swiper';
import {Navigation, Pagination } from 'swiper/modules';

const newsSlider = document.querySelector('[data-slider="news"]');
const newsPagination = document.querySelector('[data-pagination="news-pagination"]');
const buttonPrev = document.querySelector('[data-button="news-prev"]');
const buttonNext = document.querySelector('[data-button="news-next"]');

const setSliderNews = () => new Swiper(newsSlider, {
  modules: [Navigation, Pagination],
  pagination: {
    el: newsPagination,
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
  navigation: {
    nextEl: buttonNext,
    prevEl: buttonPrev,
  },
  breakpoints: {
    1440: {
      spaceBetween: 32,
      allowTouchMove: false,
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    320: {
      spaceBetween: 20,
    },
  },
});

const initSliderNews = () => {
  if (document.body.contains(newsSlider)) {
    setSliderNews();
  }
};

export {initSliderNews};
