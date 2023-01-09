// Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.

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
        // В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
    }
}