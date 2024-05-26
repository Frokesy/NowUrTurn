document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitform');
    const extraDiv = document.querySelector('.extra');
    const form = document.querySelector('.company-form');

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



    submitButton.addEventListener('click', () => {
        console.log('hello');
        extraDiv.style.display = 'block'
        form.style.display = 'none'
    });
})