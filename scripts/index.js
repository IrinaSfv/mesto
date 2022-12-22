import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { picturePopup, openPopup, closePopup } from './popup.js';
import { initialCards } from './cardList.js'

const cardsContainer = document.querySelector('.elements__list');

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template');
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
}); 

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
const submitAddButton = popupAdd.querySelector('.add-popup__submit-button');

// Переменные для закрытия картинки
const buttonClosePicture = picturePopup.querySelector('.picture-popup__close-button');

//Переменные для валидации форм 
const elementEditForm = popupEdit.querySelector('.edit-popup__form');
const elementAddForm = popupAdd.querySelector('.add-popup__form');

// // Функции
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
  submitAddButton.classList.add('popup__submit-button_disabled');
  submitAddButton.disabled = 'disabled';
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
const checkForms = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const checkEditForm = new FormValidator(checkForms, elementEditForm);
const checkAddForm = new FormValidator(checkForms, elementAddForm);
checkEditForm.enableValidation();
checkAddForm.enableValidation();