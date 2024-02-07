const menuToggler = document.querySelector('[data-button="toggle-button"]');
const mainNav = document.querySelector('[data-menu="menu"]');
const wrapper = document.querySelector('.wrapper');
const overlay = document.querySelector('[data-overlay="overlay"]');
const menuList = mainNav.querySelector('[data-list="menu-list"]');


const onTogglerClick = () => {
  menuList.classList.toggle('is-open');
  menuToggler.classList.toggle('is-open');
  overlay.classList.toggle('is-open');
  wrapper.classList.toggle('is-open');
};

menuToggler.addEventListener('click', onTogglerClick);

// menuList.addEventListener('click', (e) => {
//   if (e.target.tagName.toLowerCase() === 'a') {
//     onTogglerClick();
//   }
// });

overlay.addEventListener('click', onTogglerClick);


let scrollPrev = 0;

window.addEventListener ('scroll', () => {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll && scrollPrev <= currentScroll){
    scrollPrev = currentScroll;
    mainNav.classList.add('is-out');
  }else{
    scrollPrev = currentScroll;
    mainNav.classList.remove('is-out');
  }
});
