import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form')
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');


const STORAGE_KEY = "feedback-form-state";


inputEl.addEventListener('input', throttle(onInputChange, 500))
textareaEl.addEventListener('input', throttle(onInputChange, 500))


updateInput();

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    formData.forEach((name, value) => {
        console.log(name, value);
    })

    formEl.reset();

    localStorage.removeItem(STORAGE_KEY);
});


function onInputChange(e) {
    const email = inputEl.value;
    const message = textareaEl.value;
    const formData = {
        email,
        message,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};


function updateInput() {
    let inputSaved = localStorage.getItem(STORAGE_KEY);
    inputSaved = JSON.parse(inputSaved);

    if (inputSaved) {

        inputEl.value = inputSaved.email;
        textareaEl.value = inputSaved.message;

    };
};