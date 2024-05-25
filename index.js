document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const shadowElement = document.querySelector('.shadow');
    const modal = document.querySelector('.nav-modal')

    hamburgerMenu.addEventListener('click', () => {
        shadowElement.classList.toggle('shadow-active');
        modal.classList.toggle('nav-modal-active');
    });
});