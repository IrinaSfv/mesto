import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this.formElement = this._popup.querySelector('.popup__form');
        this.submitButton = this._popup.querySelector('.popup__submit-button');
        this._inputList = this.formElement.querySelectorAll('.popup__input');
    }

    _getInputValues() { //собирает данные всех полей формы
        const inputsValues = {};
        Array.from(this._inputList).forEach(inputElement => {
            inputsValues[inputElement.id] = inputElement.value;
        });
        return inputsValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener('submit', (evt) => { 
            evt.preventDefault(); 
            this._handleSubmitForm(this._getInputValues()) 
        });
    }

    close() {
        super.close();
        this.formElement.reset();
    }
}