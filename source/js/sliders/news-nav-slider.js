import Swiper from 'swiper/bundle';

const newsNavSlider = document.querySelector('[data-slider="news-nav"]');

const setSliderNewsNav = () => new Swiper(newsNavSlider, {
  slidesPerView: 'auto',
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
    768: {
    },
  },
});

const initSliderNewsNav = () => {
  if (document.body.contains(newsNavSlider)) {
    setSliderNewsNav();
  }
};

export {initSliderNewsNav};
