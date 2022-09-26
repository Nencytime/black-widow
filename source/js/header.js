const header = document.querySelector('.header');
const toggle = document.querySelector('.header__toggle');

toggle.addEventListener('click', () => header.classList.toggle('is-open'));
