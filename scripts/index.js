const body = document.querySelector('body');

const firstNameDiv = document.querySelector('#first');
const firstNameInput = document.querySelector('#firstName');

firstNameInput.addEventListener('blur', () => {
    while (firstNameDiv.children[2]) {
        firstNameDiv.removeChild(firstNameDiv.children[2]);
    }
    if (firstNameInput.validity.tooShort) {
        let error = document.createElement('span');
        error.classList.add('error');
        error.textContent = ('Too short...')
        firstNameDiv.appendChild(error);
    } else if (firstNameInput.value) {
        let valid = document.createElement('span');
        valid.classList.add('valid');
        valid.textContent = ('Welcome aboard, ' + firstNameInput.value + '!')
        firstNameDiv.appendChild(valid);
    } else {
        let error = document.createElement('span');
        error.classList.add('error');
        error.textContent = ('This is a required field!')
        firstNameDiv.appendChild(error);
    }
});

const lastNameDiv = document.querySelector('#last');
const lastNameInput = document.querySelector('#lastName');

lastNameInput.addEventListener('blur', () => {
    while (lastNameDiv.children[2]) {
        lastNameDiv.removeChild(lastNameDiv.children[2]);
    }
    if (lastNameInput.validity.tooShort) {
        let error = document.createElement('span');
        error.classList.add('error');
        error.textContent = ('That\'s not enough characters!')
        lastNameDiv.appendChild(error);
    } else if (lastNameInput.value) {
        let valid = document.createElement('span');
        valid.classList.add('valid');
        valid.textContent = ('Cool name!')
        lastNameDiv.appendChild(valid);
    } else {
        let error = document.createElement('span');
        error.classList.add('error');
        error.textContent = ('This is a required field!')
        lastNameDiv.appendChild(error);
    }
});

const emailDiv = document.querySelector('#mail');
const emailInput = document.querySelector('#email');

emailInput.addEventListener('blur', () => {
    while (emailDiv.children[2]) {
        emailDiv.removeChild(emailDiv.children[2]);
    }
    if (emailInput.validity.typeMismatch) {
        let error = document.createElement('span');
        error.classList.add('error');
        error.textContent = 'Looking for an email! Like "awesome@sauce.com"!';
        emailDiv.appendChild(error);
    } else if (emailInput.value) {
        let valid = document.createElement('span');
        valid.classList.add('valid');
        valid.textContent = ('Very professional!')
        emailDiv.appendChild(valid);
    } else {
        let error = document.createElement('span');
        error.classList.add('error');
        error.textContent = ('This is a required field!')
        emailDiv.appendChild(error);
    }
});

const phoneDiv = document.querySelector('#phoneNum');
const phoneInput = document.querySelector('#phone');

phoneInput.addEventListener('focus', () => {
    if (phoneInput.value) {
        console.log(phoneInput.value.replace(/\W/g, ''));
        phoneInput.value = phoneInput.value.replace(/\W/g, '');
    }
})

phoneInput.addEventListener('blur', () => {
    while (phoneDiv.children[2]) {
        phoneDiv.removeChild(phoneDiv.children[2]);
    }
    if (phoneInput.validity.patternMismatch) {
        let error = document.createElement('span');
        error.classList.add('error');
        error.textContent = ('Looking for 10 numbers!')
        phoneDiv.appendChild(error);
    } else if (phoneInput.value) {
        let valid = document.createElement('span');
        valid.classList.add('valid');
        valid.textContent = ('Looks good!')
        phoneDiv.appendChild(valid);

        let number = phoneInput.value.valueOf();
        phoneInput.value = ('(' + number.charAt(0) + number.charAt(1) + number.charAt(2) + ') ' +
            number.charAt(3) + number.charAt(4) + number.charAt(5) + '-' +
            number.charAt(6) + number.charAt(7) + number.charAt(8) + number.charAt(9));
    } else {
        let error = document.createElement('span');
        error.classList.add('error');
        error.textContent = ('This is a required field!')
        phoneDiv.appendChild(error);
    }
});

const pwdDiv = document.querySelector('#pwdDiv');
const pwd = document.querySelector('#pwd');

const pwd2Div = document.querySelector('#pwd2Div');
const pwd2 = document.querySelector('#pwd2');

const submitButton = document.querySelector('#submit');