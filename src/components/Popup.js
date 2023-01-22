export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close-button');
        this.close = this.close.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlay = this._handleOverlay.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }
    
    close() {
        this._popup.classList.remove('popup_opened');
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
        this._buttonClose.addEventListener('click', this.close);
        this._popup.addEventListener('mousedown', this._handleOverlay);
    }
}