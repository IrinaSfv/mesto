export default class Card {
  constructor(data, templateElement, handleCardClick, openPopup) { 
      this._name = data.name;
      this._link = data.link;
      this._templateElement = templateElement; 
      this._handleCardClick = handleCardClick;
      this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = this._templateElement
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
    this._openPopup;
    const likeButton = this._element.querySelector('.element__like-button');
    const trashButton = this._element.querySelector('.element__trash-button');
    const pictureButton = this._element.querySelector('.element__photo');
    likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });
    trashButton.addEventListener('click', () => {
      this._handleTrashButton();
    });
    pictureButton.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _handleLikeButton() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  };
  
  _handleTrashButton() {
    this._element.remove();
  };
}