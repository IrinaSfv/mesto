import { cardsContainer, Card } from './Card.js';
import { checkForms, FormValidator } from './FormValidator.js';

//Переменные для редактирования профиля
const popupEdit = document.querySelector('.edit-popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_user-info');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

//Переменные для добавления карточки
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.add-popup');
const buttonCloseAdd = popupAdd.querySelector('.add-popup__close-button');
const placeInput = popupAdd.querySelector('.popup__input_type_place');
const linkInput = popupAdd.querySelector('.popup__input_type_link');

// Переменные для открытия картинки
const picturePopup = document.querySelector('.picture-popup');
const buttonClosePicture = picturePopup.querySelector('.picture-popup__close-button');
const pictureImage = picturePopup.querySelector('.picture-popup__image');
const pictureCaption = picturePopup.querySelector('.picture-popup__caption');

// Открытый попап на данный момент
let popupOpened;

//Переменные для валидации форм 
const elementEditForm = popupEdit.querySelector('.edit-popup__form');
const elementAddForm = popupAdd.querySelector('.add-popup__form');

export { popupOpened, picturePopup, pictureImage, pictureCaption };

// Функции
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  popupOpened = popup;
  document.addEventListener('keyup', handleKeyUp);
  popup.addEventListener('mousedown', handleOverlay);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popupOpened = null;
  document.removeEventListener('keyup', handleKeyUp);
  popup.removeEventListener('click', handleOverlay);
};

function openPopupForEdit() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

function closePopupForEdit() {
  closePopup(popupEdit);
};

function openPopupForAdd() {
  openPopup(popupAdd);
};

function closePopupForAdd() {
  closePopup(popupAdd);
};

function closePicturePopup() {
  closePopup(picturePopup);
};

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const item = {};
  item.link = linkInput.value;
  item.name = placeInput.value;
  const card = new Card(item, '.card-template');
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
  closePopup(popupAdd);
  linkInput.value = '';
  placeInput.value = '';
};

function handleKeyUp(evt) {
  if(evt.key === 'Escape') {
    popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

function handleOverlay(evt) {
  if(!evt.target.closest('.popup__container')) {
    closePopup(evt.target.closest('.popup_opened'));
  }
};

//События
buttonEdit.addEventListener('click', openPopupForEdit);
buttonCloseEdit.addEventListener('click', closePopupForEdit);
elementEditForm.addEventListener('submit', handleEditFormSubmit);
buttonAdd.addEventListener('click', openPopupForAdd);
buttonCloseAdd.addEventListener('click', closePopupForAdd);
elementAddForm.addEventListener('submit', handleAddFormSubmit);
buttonClosePicture.addEventListener('click', closePicturePopup);

//Валидация 
const checkEditForm = new FormValidator(checkForms, elementEditForm);
const checkAddForm = new FormValidator(checkForms, elementAddForm);
checkEditForm.enableValidation();
checkAddForm.enableValidation();