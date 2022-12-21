import { popupOpened, picturePopup, pictureImage, pictureCaption, openPopup } from './index.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const cardsContainer = document.querySelector('.elements__list');

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
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__photo').alt = this._name;
    this._element.querySelector('.element__photo').src = this._link;
    return this._element;
  } 

  _setEventListeners() {
    const likeButton = this._element.querySelector('.element__like-button');
    const trashButton = this._element.querySelector('.element__trash-button');
    const buttonOpenPicture = this._element.querySelector('.element__photo');
    likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });
    trashButton.addEventListener('click', () => {
      this._handleTrashButton();
    });
    buttonOpenPicture.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _handleCardClick() {
    openPopup(picturePopup);
    const src = this._element.querySelector('.element__photo').src;
    const textContent = this._element.querySelector('.element__photo').alt;
    pictureImage.src = src;
    pictureImage.alt = textContent;
    pictureCaption.textContent = textContent;
  }

  _handleLikeButton() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  };
  
  _handleTrashButton() {
    this._element.remove();
  };
}

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template');
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
}); 
