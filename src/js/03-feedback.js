import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';
formRef.addEventListener('input', throttle(handleInput, 500));
formRef.addEventListener('submit', handleSubmit);

function handleInput(event) {
 
  let savedDate = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};

  const { name, value} = event.target;

  savedDate = {
    ...savedDate,
    [name]:value,
  };

    localStorage.setItem(FORM_KEY, JSON.stringify(savedDate));


}

const  showData = () => {
  let dataToShow = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};

  const inputNames = Object.keys(dataToShow);
    
    
  inputNames.forEach(inputName => {
    let input = formRef.elements[inputName];
      
    let valueKey = 'value';

      input[valueKey] = dataToShow[inputName];
      
  });
};
 showData();

function handleSubmit(event) {
  event.preventDefault();

  let finalData = {};
  const formData = new FormData(formRef);
  for (const [name, value] of formData.entries()) {
    if (!value) {
      
      return;
    }
    finalData[name] = value;
  }

    localStorage.removeItem(FORM_KEY);
    
    console.log(finalData);
    
  formRef.reset();
}

