export default class Card {
  constructor(data, templateElement, userId, handleCardClick, handleLikeClick, handleTrashClick) { 
      this._name = data.name;
      this._link = data.link;
      this._likes = data.likes;
      this._id = data._id;
      this._ownerId = data.owner._id
      this._userId = userId; //задаем этот параметр при загрузке данных пользователя
      this._templateElement = templateElement;
      this._handleCardClick = handleCardClick;
      this._handleLikeClick = handleLikeClick;
      this._handleTrashClick = handleTrashClick;
      this._isLiked = this._likes.some(userLike => userLike._id === this._userId);
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
    this._likeButton = this._element.querySelector('.element__like-button');
    if(this._ownerId === this._userId) {
      this._element.querySelector('.element__trash-button').classList.add('element__trash-button_active');
    };
    if(this._isLiked) {
      this._likeButton.classList.add('element__like-button_active');
    } else {
      this._likeButton.classList.remove('element__like-button_active');
    }
    this._countLikes();
    this._setEventListeners();
    const elementTitle = this._element.querySelector('.element__title');
    const elementPhoto = this._element.querySelector('.element__photo');
    elementTitle.textContent = this._name;
    elementPhoto.alt = this._name;
    elementPhoto.src = this._link;
    return this._element;
  } 

  _countLikes() {
    const newLikes = this._likes;
    this._element.querySelector('.element__like-caption').textContent = newLikes.length;
  }

  switchLikes(likeButton, cardElement, res) {
    likeButton.classList.toggle('element__like-button_active');
    cardElement.querySelector('.element__like-caption').textContent = res.likes.length;
  }

  _setEventListeners() {
    const trashButton = this._element.querySelector('.element__trash-button');
    const pictureButton = this._element.querySelector('.element__photo');
    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    });
    trashButton.addEventListener('click', () => {
      this._handleTrashClick(this._element, this._id);
    });
    pictureButton.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
  }

  _handleLike() {
    // console.log(this._isLiked);
    if(this._isLiked) {
      this._handleLikeClick(this, this._element, this._likeButton, this._id, "remove");
    } else {
      this._handleLikeClick(this, this._element, this._likeButton, this._id, "set");
    }
    this._isLiked = !this._isLiked;
  };
}