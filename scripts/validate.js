//функции валидации
  const checkInputValue = (inputElement, checkConfig) => {
    const error = document.querySelector(`#${inputElement.id}-error`);
    if(inputElement.validity.valid) {
        error.textContent = '';
        error.classList.remove(checkConfig.errorClass);
        inputElement.classList.remove(checkConfig.inputErrorClass);
    } else {
        error.textContent = inputElement.validationMessage;
        error.classList.add(checkConfig.errorClass);
        inputElement.classList.add(checkConfig.inputErrorClass);
    };
  }

  const toggleButtonState = (inputList, buttonElement, checkConfig) => {
    const isValid = inputList.every(inputElement => {
        return inputElement.validity.valid;
    });

    if(isValid) {
        buttonElement.classList.remove(checkConfig.inactiveButtonClass);
        buttonElement.disabled = '';
    } else {
        buttonElement.classList.add(checkConfig.inactiveButtonClass);
        buttonElement.disabled = 'disabled';
    }
  }

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const enableValidation = (checkConfig) => {
    const {formSelector, inputSelector, submitButtonSelector, ...restCheckConfig} = checkConfig;
    const formList = [...document.querySelectorAll(formSelector)];
    formList.forEach(formElement => {
        const inputList = [...formElement.querySelectorAll(inputSelector)];
        const buttonElement = formElement.querySelectorAll(submitButtonSelector)[0];
        toggleButtonState(inputList, buttonElement, restCheckConfig);
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    
        inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                checkInputValue(inputElement, restCheckConfig);
                toggleButtonState(inputList, buttonElement, restCheckConfig);
            });
        });
      });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 