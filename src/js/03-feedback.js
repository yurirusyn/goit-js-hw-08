const STORAGE_KEY = 'feedback-form-state';
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  email: document.querySelector('input'),
};
 
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
  localStorage.removeItem(STORAGE_KEY);
  
}

const formData = {};
function onTextareaInput() {
  refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    // console.log(formData);

    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJSON);
  });
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const savedMessageParse = JSON.parse(savedMessage);
   
  if (savedMessageParse) {
    refs.email.value = savedMessageParse.email;
    refs.textarea.value = savedMessageParse.message;
    
  }
}
