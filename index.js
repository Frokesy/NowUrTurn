document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const shadowElement = document.querySelector('.shadow');
    const modal = document.querySelector('.nav-modal');

    hamburgerMenu.addEventListener('click', () => {
        shadowElement.classList.toggle('shadow-active');
        modal.classList.toggle('nav-modal-active');
        hamburgerMenu.style.display = 'none';
        closeMenu.style.display = 'flex';
    });

    closeMenu.addEventListener('click', () => {
        shadowElement.classList.toggle('shadow-active');
        modal.classList.toggle('nav-modal-active');
        closeMenu.style.display = 'none';
        hamburgerMenu.style.display = 'flex';
    });
});