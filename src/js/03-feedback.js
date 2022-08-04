import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);
textForm();

const formData = { email: "", message: "" };

function onInputChange(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    formData.email = inputEl.value;
    formData.message = messageEl.value;
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
}

function textForm() {
    const formValues = localStorage.getItem(STORAGE_KEY);
    const objectValues = JSON.parse(formValues);

    if (objectValues) {
        const savedEmail = objectValues.email;
        inputEl.value = savedEmail || '';

        const savedMessage = objectValues.message;
        messageEl.value = savedMessage || '';
    };
};