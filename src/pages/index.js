import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { initialCards, cardsContainer, buttonEdit, inputName, inputJob, buttonAdd, checkForms} from '../utils/constants.js';

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
popupEdit.setEventListeners();
buttonEdit.addEventListener('click', () => {
  const profileData = userInfo.getUserInfo();
  inputName.value = profileData.name;
  inputJob.value = profileData.job;
  popupEdit.open();
});
const popupAdd = new PopupWithForm('.add-popup', handleAddFormSubmit);
popupAdd.setEventListeners();
buttonAdd.addEventListener('click', popupAdd.open.bind(popupAdd));
const picturePopup = new PopupWithImage('.picture-popup');
picturePopup.setEventListeners();

// Функции работы попапов
function handleEditFormSubmit(userData) {
  const { name, about } = userData;
  userInfo.setUserInfo(name, about);
  popupEdit.close();
};

function handleAddFormSubmit(userData) {
  const newItem = {};
  const { place, pictureSrc } = userData;
  newItem.link = pictureSrc;
  newItem.name = place;
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