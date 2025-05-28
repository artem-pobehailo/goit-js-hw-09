const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handelInput);
form.addEventListener('submit', handleSubmit);

populateInput();

function handelInput(event) {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function populateInput() {
  const saved = localStorage.getItem('feedback-form-state');

  if (saved) {
    const parsed = JSON.parse(saved);

    form.elements.email.value = parsed.email;
    form.elements.message.value = parsed.message;

    formData.email = parsed.email;
    formData.message = parsed.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}
