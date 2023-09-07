import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  throttle(() => {
    const savedInfo = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(savedInfo));
  }, 500)
);

const localStorageInfo = localStorage.getItem('feedback-form-state');
const parsedLocalStorage = JSON.parse(localStorageInfo);
if (localStorageInfo) {
  form.elements.email.value = parsedLocalStorage.email;
  form.elements.message.value = parsedLocalStorage.message;
} else {
  form.reset();
}
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const savedInfo = {
      email: email,
      message: message,
    };

    console.log(savedInfo);

    form.reset();
  }
}
