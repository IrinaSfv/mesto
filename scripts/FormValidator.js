export const checkForms = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

export class FormValidator {
    constructor(checkConfigData, formElement) { 
        this._formSelector = checkConfigData.formSelector;
        this._inputSelector = checkConfigData.inputSelector;
        this._submitButtonSelector = checkConfigData.submitButtonSelector;
        this._inactiveButtonClass = checkConfigData.inactiveButtonClass;
        this._inputErrorClass = checkConfigData.inputErrorClass;
        this._errorClass = checkConfigData.errorClass;
        this._formElement = formElement;
    }

    _checkInputValue(inputElement) {
        const error = document.querySelector(`#${inputElement.id}-error`);
        if(inputElement.validity.valid) {
            error.textContent = '';
            error.classList.remove(this._errorClass);
            inputElement.classList.remove(this._inputErrorClass);
        } else {
            error.textContent = inputElement.validationMessage;
            error.classList.add(this._errorClass);
            inputElement.classList.add(this._inputErrorClass);
        };
    }

    enableValidation() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._toggleButtonState(inputList);
        this._setEventListeners(inputList);
    }

    _toggleButtonState(inputList) {
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        const isValid = inputList.every(inputElement => {
            return inputElement.validity.valid;
        });

        if(isValid) {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = '';
        } else {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = 'disabled';
        }
    }
    
    _setEventListeners(inputList) {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValue(inputElement);
                this._toggleButtonState(inputList);
            });
        });
    }
}