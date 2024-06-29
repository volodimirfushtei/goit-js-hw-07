'use strict';
const formEl = document.querySelector('form.login-form');
formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  } else {
    const formData = {
      email: form.elements['email'].value.trim(),
      password: form.elements['password'].value.trim(),
    };
    console.log('Form with:', formData);
    form.reset();
  }
}
