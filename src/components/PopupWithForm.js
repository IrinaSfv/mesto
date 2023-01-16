import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formElement = this._popup.querySelector('.popup__form');
        this.submitButton = this._popup.querySelector('.popup__submit-button');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
    }

    _getInputValues() { //собирает данные всех полей формы
        const inputsValues = {};
        Array.from(this._inputList).forEach(inputElement => {
            inputsValues[inputElement.id] = inputElement.value;
        });
        console.log(inputsValues);
        return inputsValues;
    }

    setEventListeners() {
        super.setEventListeners();
        //this._formElement.addEventListener('submit', this._handleSubmitForm);
        this._formElement.addEventListener('submit', (evt) => { 
            evt.preventDefault(); 
            this._handleSubmitForm(this._getInputValues()) 
        });
    }

    openEditPopup() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
        // this._getInputValues() = userInfo.getUserInfo();
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}