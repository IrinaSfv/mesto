import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.picture-popup__image');
        this._popupCaption = this._popup.querySelector('.picture-popup__caption');
    }

    open(popupSrc, popupAlt) {
        super.open();
        this._popupImage.src = popupSrc;
        this._popupImage.alt = popupAlt;
        this._popupCaption.textContent = popupAlt;
    }
}