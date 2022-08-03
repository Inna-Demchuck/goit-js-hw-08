import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);
textForm();

const formData = {};

function onInputChange(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    formData.email = inputEl.value;
    formData.message = messageEl.value;
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function textForm() {
    const newValues = localStorage.getItem(STORAGE_KEY);
    const valuesObject = JSON.parse(newValues);

    if (valuesObject) {
        const savedEmail = valuesObject.email;
        inputEl.value = savedEmail;

        const savedMessage = valuesObject.message;
        messageEl.value = savedMessage;
    };
};