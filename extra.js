document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitform');
    const extraDiv = document.querySelector('.extra');
    const form = document.querySelector('.company-form');
    const modal = document.querySelector('.overlay');
    const identityModal = document.querySelector('.identity-overlay')

    const logoInput = document.getElementById('logo-upload');
    const logoButton = document.getElementById('logo-button');
    const logoFilename = document.getElementById('logo-filename');
    const employment = document.getElementById('employment');
    const identity = document.getElementById('identity')
    const listItems = document.querySelectorAll('.list-item');
    const selectedText = document.getElementById('selected-text');
    const listItemsVer = document.querySelectorAll('.list-item2');
    const selectedTextVer = document.getElementById('selected-text-ver');

    logoButton.addEventListener('click', () => {
        logoInput.click();
    });

    employment.addEventListener('click', () => {
        modal.classList.toggle('active')
    })

    modal.addEventListener('click', () => {
        if (modal.classList.value === 'overlay active') {
            modal.classList.remove('active')
        }
    })

    identity.addEventListener('click', () => {
        console.log("identity clicked")
        identityModal.classList.toggle('active')
    })

    identityModal.addEventListener('click', () => {
        if (identityModal.classList.value === 'identity-overlay active') {
            identityModal.classList.remove('active')
        }
    })

    listItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const selectedItemText = event.target.textContent;
            selectedText.textContent = selectedItemText;
            identityModal.classList.remove('active'); 
        });
    });

    listItemsVer.forEach(item => {
        item.addEventListener('click', (event) => {
            const selectedItemText = event.target.textContent;
            selectedTextVer.textContent = selectedItemText;
            identityModal.classList.remove('active'); 
        });
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
        extraDiv.style.display = 'block'
        form.style.display = 'none'
    });
})