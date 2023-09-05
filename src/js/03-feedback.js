import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener("input", saveItems);

function saveItems(event) {

    event.preventDefault();

    const savedInfo = {
        email: input.value,
        message: textarea.value,

    };

    localStorage.setItem("feedback-form-state", JSON.stringify(savedInfo)), 500



}
