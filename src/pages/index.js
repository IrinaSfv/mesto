import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { initialCards, cardsContainer, buttonEdit, buttonAdd, checkForms, elementEditForm, elementAddForm } from '../utils/constants.js';

//Карточки
const cardList = new Section({ 
    items: initialCards,  
    renderer: (item) => {
      createCards(item);
      cardList.addItem(cardElement);
    }
  }, '.elements__list'
);

//Данные пользователя
const userInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__description'
});

//Попапы
const popupEdit = new PopupWithForm('.edit-popup', handleEditFormSubmit);
buttonEdit.addEventListener('click', popupEdit.openEditPopup.bind(popupEdit));
const popupAdd = new PopupWithForm('.add-popup', handleAddFormSubmit);
buttonAdd.addEventListener('click', popupAdd.open.bind(popupAdd));
const picturePopup = new PopupWithImage('.picture-popup');

// Функции работы попапов
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  // const nameInput = document.querySelector('.popup__input_type_name');
  // const jobInput = document.querySelector('.popup__input_type_user-info');
  userInfo.setUserInfo(popupEdit._getInputValues()[0], popupEdit._getInputValues()[1]);
  popupEdit.close();
  // nameInput.value = userInfo.getUserInfo().profileName;
  // jobInput.value = userInfo.getUserInfo().profileJob;
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newItem = {};
  // const linkInput = document.querySelector('.popup__input_type_link');
  // const placeInput = document.querySelector('.popup__input_type_place');
  newItem.link = this._getInputValues()[0];
  newItem.name = this._getInputValues()[1];
  createCards(newItem);
  cardList.addNewItem(cardElement);
  // const newCard = new Section({ 
  //   items: newItem,  
  //   renderer: (item) => {
  //     createCards(item);
  //     newCard.addNewItem(cardElement);
  //     }
  //   }, '.elements__list'
  // );
  cardList.renderNewItem();
  popupAdd.close();
  // linkInput.value = '';
  // placeInput.value = '';
  popupAdd.submitButton.classList.add('popup__submit-button_disabled');
  popupAdd.submitButton.disabled = 'disabled';
};

function handleCardClick() {
  // picturePopup.open();
  picturePopup._popupImage.src = this._link;
  picturePopup._popupImage.alt = this._name;
  picturePopup._popupCaption.textContent = this._name;
};

//Функция создания карточек
function createCards(item) {
  const card = new Card(item, cardsContainer, handleCardClick, picturePopup.open);
  const cardElement = card.generateCard();
  return cardElement;
}

//Валидация 
const checkEditForm = new FormValidator(checkForms, elementEditForm);
const checkAddForm = new FormValidator(checkForms, elementAddForm);
checkEditForm.enableValidation();
checkAddForm.enableValidation();

//Создание карточек
cardList.renderItems();