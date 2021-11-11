const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

function updateOutput() {
  const dataLocal = localStorage.getItem('feedback-form-state');
  const dataLocalObj = JSON.parse(dataLocal);
  if (!dataLocal) {
    return;
  }
  form.elements.email.value = dataLocalObj.email || '';
  form.elements.message.value = dataLocalObj.message || '';
}

updateOutput();
form.addEventListener(
  'input',
  throttle(ev => {
    const storage = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    const storageStr = JSON.stringify(storage);
    localStorage.setItem('feedback-form-state', storageStr);
    updateOutput();
  }, 500),
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: form.elements.email.value, message: form.elements.message.value });
  e.currentTarget.reset();
  localStorage.clear();
});
