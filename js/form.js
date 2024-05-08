// Contacts
const meno = document.getElementById('meno');
const email = document.getElementById('email');
const comment = document.getElementById('comment');
const checkbox = document.getElementById('check');
const submitBtn = document.getElementById('submitBtn');
const emailRegex = new RegExp('.+@.+\..+');
const digitReg = new RegExp(/\d/);
const validClass = 'is-valid';
const invalidClass = 'is-invalid';

function checkMeno(meno) {
    return meno.value.length > 1 && meno.value.length < 40 && meno.value.split(' ').length <= 3 && !digitReg.test(meno.value);
    return meno.value.split(' ').length > 1;
}

function checkEmail(email) {
    return emailRegex.test(email.value);
}

function checkComment(comment) {
    return comment.value.length > 0;
}

function checkCheckbox(checkbox) {
    return checkbox.checked;
}

function checkSubmit() {
    return checkMeno(meno) && checkEmail(email) && checkComment(comment) && checkCheckbox(checkbox);
}

function changeValidation(element, expectClass, unexpectClass) {
    if (element.classList.contains(unexpectClass)) {
        element.classList.remove(unexpectClass);
    }
    if (!element.classList.contains(expectClass)) {
        element.classList.add(expectClass);
    }
}

function makeValid(element) {
    changeValidation(element, validClass, invalidClass);
}

function makeInvalid(element) {
    changeValidation(element, invalidClass, validClass);
}

function checkEnableSubmit() {
    if (checkSubmit()) {
        changeValidation(submitBtn, 'active', 'disabled');
    } else {
        changeValidation(submitBtn, 'disabled', 'active');
    }
}

function check(element, checkFunc) {
    if (checkFunc(element)) {
        makeValid(element);
        checkEnableSubmit();
    } else {
        makeInvalid(element);
        checkEnableSubmit();
    }
}


meno.addEventListener('input', (event) => {check(meno, checkMeno);});
email.addEventListener('focusout', (event) => {check(email, checkEmail);});
comment.addEventListener('focusout', (event) => {check(comment, checkComment);});

checkbox.addEventListener('change', (event) => {checkEnableSubmit();});