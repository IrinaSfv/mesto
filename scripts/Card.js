import { picturePopup, pictureImage, pictureCaption, openPopup } from './popup.js';

export class Card {
  constructor(data, templateSelector) { 
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector; 
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.elements__card')
    .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const elementTitle = this._element.querySelector('.element__title');
    const elementPhoto = this._element.querySelector('.element__photo');
    elementTitle.textContent = this._name;
    elementPhoto.alt = this._name;
    elementPhoto.src = this._link;
    return this._element;
  } 

  _setEventListeners() {
    const likeButton = this._element.querySelector('.element__like-button');
    const trashButton = this._element.querySelector('.element__trash-button');
    const openPicturePopup = this._element.querySelector('.element__photo');
    likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });
    trashButton.addEventListener('click', () => {
      this._handleTrashButton();
    });
    openPicturePopup.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _handleCardClick() {
    openPopup(picturePopup);
    pictureImage.src = this._link;
    pictureImage.alt = this._name;
    pictureCaption.textContent = this._name;
  }

  _handleLikeButton() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  };
  
  _handleTrashButton() {
    this._element.remove();
  };
}