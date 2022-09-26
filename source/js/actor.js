/* const item = document.querySelector('.actor__item');

item.addEventListener('click', () => item.classList.add('actor__item--current'));
 */
document.getElementById('actor__item').onclick = function() {
document.getElementById('actor__item').classList.add('actor__item--current');
}
