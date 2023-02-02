import Popup from "./Popup.js";

export default class PopupWithConfirm  extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this.formElement = this._popup.querySelector('.popup__form');
        this.submitButton = this._popup.querySelector('.popup__submit-button');
    }

    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener('submit', (evt) => { 
            evt.preventDefault(); 
            this._handleSubmitForm(this.card, this.cardId) 
        });
    }

    open(card, cardId) {
        super.open();
        this.card = card;
        this.cardId = cardId;
    }

    close() {
        super.close();
        this.formElement.reset();
    }
}