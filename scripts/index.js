//Карточки на странице
const cardsList = document.querySelector('.elements__list'); 
const initialCards = document.querySelector('#initialCards'); 
//Архыз
const initialCardsClone = initialCards.content.cloneNode(true);
initialCardsClone.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
initialCardsClone.querySelector('.element__title').textContent = 'Архыз';
cardsList.append(initialCardsClone); 
//Челябинская область
const initialCardsClone1 = initialCards.content.cloneNode(true);
initialCardsClone1.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
initialCardsClone1.querySelector('.element__title').textContent = 'Челябинская область';
cardsList.append(initialCardsClone1); 
//Иваново
const initialCardsClone2 = initialCards.content.cloneNode(true);
initialCardsClone2.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
initialCardsClone2.querySelector('.element__title').textContent = 'Иваново';
cardsList.append(initialCardsClone2); 
//Камчатка
const initialCardsClone3 = initialCards.content.cloneNode(true);
initialCardsClone3.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
initialCardsClone3.querySelector('.element__title').textContent = 'Камчатка';
cardsList.append(initialCardsClone3); 
//Холмогорский район
const initialCardsClone4 = initialCards.content.cloneNode(true);
initialCardsClone4.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
initialCardsClone4.querySelector('.element__title').textContent = 'Холмогорский район';
cardsList.append(initialCardsClone4); 
//Байкал
const initialCardsClone5 = initialCards.content.cloneNode(true);
initialCardsClone5.querySelector('.element__photo').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';
initialCardsClone5.querySelector('.element__title').textContent = 'Байкал';
cardsList.append(initialCardsClone5); 

//Переменные для редактирования профиля
const editPopup = document.querySelector('.edit-popup');
const editButton = document.querySelector('.profile__edit-button');
const editCloseButton = editPopup.querySelector('.popup__close-button'); 
const editformElement = editPopup.querySelector('.edit-popup__form');
let nameInput = editPopup.querySelector('.popup__input_type_name');
let jobInput = editPopup.querySelector('.popup__input_type_user-info');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__description');

//Переменные для добавления карточки
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.add-popup');
const addCloseButton = addPopup.querySelector('.add-popup__close-button'); 
const addFormElement = addPopup.querySelector('.add-popup__form');
let placeInput = addPopup.querySelector('.popup__input_type_place');
let linkInput = addPopup.querySelector('.popup__input_type_link');

//Переменные для удаления карточки
const trashButton = document.querySelectorAll('.element__trash-button'); 

// Переменные для лайка карточки
const likeButton = document.querySelectorAll('.element__like-button');

// Переменные для открытия картинки
const openButton = document.querySelectorAll('.element__photo');
const picturePopup = document.querySelector('.picture-popup');
const closeButton = picturePopup.querySelector('.picture-popup__close-button');
let pictureImage = picturePopup.querySelector('.picture-popup__image');
let pictureCaption = picturePopup.querySelector('.picture-popup__caption');

// Функции
function popupOpen() {
  editPopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClose() {
  editPopup.classList.remove('popup_opened');
}

function addPopupOpen() {
  addPopup.classList.add('popup_opened');
}

function addPopupClose() {
  addPopup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

function addFormSubmit(evt) {
  evt.preventDefault();
  const initialNewCard = initialCards.content.cloneNode(true);
  initialNewCard.querySelector('.element__photo').src = linkInput.value;
  initialNewCard.querySelector('.element__title').textContent = placeInput.value;
  cardsList.prepend(initialNewCard); 
  addPopupClose();
  const trashButton = document.querySelector('.element__trash-button'); 
  const likeButton = document.querySelector('.element__like-button');
  const openButton = document.querySelector('.element__photo');
  trashButton.addEventListener('click', function() {
    const deleteItem = trashButton.closest('.elements__card');
    deleteItem.remove();
  });
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('element__like-button_active');
  });
  openButton.addEventListener('click', function() {
    picturePopup.classList.add('popup_opened');
    const elementPhoto = openButton.closest('.element__photo');
    const elementButton = openButton.nextElementSibling;
    const elementDescription = elementButton.nextElementSibling;
    const elementTitle = elementDescription.firstElementChild;
    pictureImage.src = elementPhoto.src;
    pictureImage.alt = elementPhoto.alt;
    pictureCaption.textContent = elementTitle.textContent;
  });
}

function picturePopupClose() {
  picturePopup.classList.remove('popup_opened');
}

//События
editButton.addEventListener('click', popupOpen);
editCloseButton.addEventListener('click', popupClose);
editformElement.addEventListener('submit', formSubmitHandler); 
addButton.addEventListener('click', addPopupOpen);
addCloseButton.addEventListener('click', addPopupClose);
addFormElement.addEventListener('submit', addFormSubmit);
closeButton.addEventListener('click', picturePopupClose);

// Лайк
for(let i = 0; i < likeButton.length; i += 1) {
  likeButton[i].addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__like-button_active');
  }); 
}

// Удаление
for(let i = 0; i < trashButton.length; i += 1) {
  trashButton[i].addEventListener('click', function(evt) {
    const eventTarget = evt.target;
    const deleteItem = eventTarget.closest('.elements__card');
    deleteItem.remove();
  }); 
}

// Открытие картинки
for(let i = 0; i < openButton.length; i += 1) {
  openButton[i].addEventListener('click', function(evt) {
    picturePopup.classList.add('popup_opened');
    const eventTarget = evt.target;
    const elementPhoto = eventTarget.closest('.element__photo');
    const elementButton = eventTarget.nextElementSibling;
    const elementDescription = elementButton.nextElementSibling;
    const elementTitle = elementDescription.firstElementChild;
    pictureImage.src = elementPhoto.src;
    pictureImage.alt = elementPhoto.alt;
    pictureCaption.textContent = elementTitle.textContent;
  }); 
}
