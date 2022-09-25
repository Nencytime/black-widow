const header = document.querySelector('.header');
const wrapper = document.querySelector('.header__menu-wrapper');

header.classList.remove('no-js');
burger.addEventListener('click', () => header.classList.toggle('is-open'));
