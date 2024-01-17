import Swiper from 'swiper/bundle';

const heroSlider = document.querySelector('[data-slider="hero"]');
const heroSliderPagination = document.querySelector('[data-pagination="hero-pagination"]');

const setSliderHero = () => new Swiper(heroSlider, {
  pagination: {
    el: heroSliderPagination,
    clickable: true,
  },
  // autoplay: {
  //   delay: 3000,
  // },
  loop: true,
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});

const initSliderHero = () => {
  if (document.body.contains(heroSlider)) {
    setSliderHero();
  }
};

export {initSliderHero};
