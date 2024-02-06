// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import './utils/scroll-lock';
import './utils/focus-lock';
import {iosVhFix} from './utils/ios-vh-fix';
import './menu/toggler.js';
import {initAccordions} from './accordeon/init-accordion.js';
import {initSliderHero} from './sliders/hero-slider.js';
import {initSliderPrograms} from './sliders/programs-slider.js';
import {initSliderNewsNav} from './sliders/news-nav-slider.js';
import {initSliderNews} from './sliders/news-slider.js';
import {initSliderReviews} from './sliders/reviews-slider.js';
import {initModals} from './modal/init-modals.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initAccordions();
  initSliderHero();
  initSliderPrograms();
  initSliderNewsNav();
  initSliderNews();
  initSliderReviews();
  initModals();
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  //   const form = new Form();
  //   window.form = form;
  //   form.init();
  // });
});

