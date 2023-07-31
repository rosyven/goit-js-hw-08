import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const key = 'feedback-form-state';
const formEmail = form.elements.email;
const formMessage = form.elements.message;

function saveData() {
  const data = {
    email: formEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem(key, JSON.stringify(data));
}
form.addEventListener('input', throttle(saveData, 500));

window.addEventListener('load', () => {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    const data = JSON.parse(savedData);
    formEmail.value = data.email;
    formMessage.value = data.message;
  }
});

function formSubmit(event) {
  event.preventDefault();

  const data = {
    email: formEmail.value,
    message: formMessage.value,
  };
  console.log(data);
  localStorage.removeItem(key);
  form.reset();
}
form.addEventListener('submit', formSubmit);
