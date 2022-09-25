const wrapper = document.querySelector('.header__toggle');
const burger = document.querySelector('.header__menu-burger');

wrapper.addEventListener('click', () => burger.classList.toggle('animate'));
