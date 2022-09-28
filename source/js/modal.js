const modal = document.querySelector('.modal');
const button = document.querySelector('.button__ticket');
const buttonSecond = document.querySelector('.button__second-ticket');
const buttonClose = document.querySelector('.modal__button');

button.addEventListener('click', () => modal.classList.toggle('modal-open') && modal.classList.remove('modal-close'));
buttonSecond.addEventListener('click', () => modal.classList.toggle('modal-open') && modal.classList.remove('modal-close'));
buttonClose.addEventListener('click', () => modal.classList.toggle('modal-close') && modal.classList.remove('modal-open'));
