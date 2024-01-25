import Swiper from 'swiper/bundle';
import { Scrollbar, Navigation } from 'swiper/modules';

const programsSlider = document.querySelector('[data-slider="programs"]');
const buttonNext = document.querySelector('[data-button="programs-next"]');
const buttonPrev = document.querySelector('[data-button="programs-prev"]');
const scrollbar = document.querySelector('[data-swiper="programs-scrollbar"]');

const setSliderPrograms = () => {
  new Swiper(programsSlider, {
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
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 'auto',
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

const initSliderPrograms = () => {
  if (document.body.contains(programsSlider)) {
    setSliderPrograms();
  }
};

export {initSliderPrograms};
