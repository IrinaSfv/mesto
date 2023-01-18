import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { initialCards, cardsContainer, buttonEdit, buttonAdd, checkForms} from '../utils/constants.js';

//Карточки
const cardList = new Section({ 
    items: initialCards,  
    renderer: (item) => {
      const cardElement = createCards(item);
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
buttonEdit.addEventListener('click', popupEdit.open.bind(popupEdit));
const popupAdd = new PopupWithForm('.add-popup', handleAddFormSubmit);
buttonAdd.addEventListener('click', popupAdd.open.bind(popupAdd));
const picturePopup = new PopupWithImage('.picture-popup');

// Функции работы попапов
function handleEditFormSubmit(data) {
  userInfo.setUserInfo(data);
  popupEdit.close();
  data = userInfo.getUserInfo();
};

function handleAddFormSubmit(data) {
  const newItem = {};
  newItem.link = Object.values(data)[1];
  newItem.name = Object.values(data)[0];
  const newCard = createCards(newItem);
  cardList.addNewItem(newCard);
  popupAdd.close();
  popupAdd.submitButton.classList.add('popup__submit-button_disabled');
  popupAdd.submitButton.disabled = 'disabled';
};

function handleCardClick(link, name) {
  picturePopup.open(link, name);
};

//Функция создания карточек
function createCards(item) {
  const card = new Card(item, cardsContainer, handleCardClick, picturePopup.open);
  const cardElement = card.generateCard();
  return cardElement;
}

//Валидация 
const elementEditForm = popupEdit._popup.querySelector('.edit-popup__form');
const elementAddForm = popupAdd._popup.querySelector('.add-popup__form');
const checkEditForm = new FormValidator(checkForms, elementEditForm);
const checkAddForm = new FormValidator(checkForms, elementAddForm);
checkEditForm.enableValidation();
checkAddForm.enableValidation();

//Создание карточек
cardList.renderItems();