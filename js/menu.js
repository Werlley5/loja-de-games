const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.hamburger-container');

hamburger.addEventListener('click', () => {
    container.classList.toggle('show-menu');
})