export default class FormValidator {
    constructor(checkConfigData, formElement) { 
        this._formSelector = checkConfigData.formSelector;
        this._inputSelector = checkConfigData.inputSelector;
        this._submitButtonSelector = checkConfigData.submitButtonSelector;
        this._inactiveButtonClass = checkConfigData.inactiveButtonClass;
        this._inputErrorClass = checkConfigData.inputErrorClass;
        this._errorClass = checkConfigData.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
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
        this._toggleButtonState();
        this._setEventListeners();
    }

    _toggleButtonState() {
        const isValid = this._inputList.every(inputElement => {
            return inputElement.validity.valid;
        });

        if(isValid) {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = '';
        } else {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = 'disabled';
        }
    }
    
    _setEventListeners() {
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkInputValue(inputElement);
                this._toggleButtonState();
            });
        });
    }
}