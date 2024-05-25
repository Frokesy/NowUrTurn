document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const shadowElement = document.querySelector('.shadow');
    const modal = document.querySelector('.nav-modal');

    const logoInput = document.getElementById('logo-upload');
    const logoButton = document.getElementById('logo-button');
    const logoFilename = document.getElementById('logo-filename');

    logoButton.addEventListener('click', () => {
        logoInput.click();
    });

    logoInput.addEventListener('change', () => {
        const file = logoInput.files[0];
        if (file) {
            logoFilename.textContent = file.name;
            logoButton.textContent = 'Change Logo';
        } else {
            logoFilename.textContent = '';
            logoButton.textContent = 'No Logo';
        }
    });

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