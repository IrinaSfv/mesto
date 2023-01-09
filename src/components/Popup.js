export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close-button');
    }

    open() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }
    
    close() {
        this._popup.classList.remove('popup_opened');
        this._buttonClose.removeEventListener('click', this.close.bind(this));
        this._popup.removeEventListener('mousedown', this._handleOverlay);
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlay(evt) {
        if(!evt.target.closest('.popup__container')) {
            this.close();
        }
    }

    setEventListeners() {
        document.addEventListener('keyup', this._handleEscClose.bind(this));
        this._buttonClose.addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('mousedown', this._handleOverlay.bind(this));
    }
}