import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import { cardsContainer, buttonAvatar, buttonEdit, inputName, inputJob, buttonAdd, checkForms} from '../utils/constants.js';
import Api from '../components/Api';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-59',
  token: '8121c997-2813-48cf-a521-b118f084a101',
});

//Карточки
const cardList = new Section({ 
  renderer: (item) => {
    const cardElement = createCards(item);
    cardList.addItemAppend(cardElement);
  }
}, '.elements__list'); 

//Данные пользователя
const userInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__description',
  profileAvatarSelector: '.profile__avatar'
});

let userId;

//Загрузка данных пользователя и карточек
Promise.all([api.getUserData(), api.getInitialCards()])
.then(([resUser, resCards]) => {
  userInfo.setUserInfo(resUser.name, resUser.about);
  userInfo.setAvatar(resUser.avatar);
  userId = resUser._id;
  cardList.renderItems(resCards);
})
.catch(() => {
  console.log(`Ошибка при загрузке данных пользователя и карточек.`)
});

//Редактирование информации о себе
const popupEdit = new PopupWithForm('.edit-popup', handleEditFormSubmit);
popupEdit.setEventListeners();
buttonEdit.addEventListener('click', () => {
  const profileData = userInfo.getUserInfo();
  inputName.value = profileData.name;
  inputJob.value = profileData.job;
  popupEdit.open();
});

function handleEditFormSubmit(userData) {
  popupEdit.handleLoading(true, "Сохраняем...");
  const { name, about } = userData;
  api.editProfile(name, about)
  .then(() => {
    userInfo.setUserInfo(name, about);
    popupEdit.close();
  })
  .catch(() => {
    console.log(`Ошибка при обновлении данных.`)
  })
  .finally(() => {
    popupEdit.handleLoading(false);
    checkEditForm.enableValidation();
  });
};

//Добавление новой карточки
const popupAdd = new PopupWithForm('.add-popup', handleAddFormSubmit);
popupAdd.setEventListeners();
buttonAdd.addEventListener('click', popupAdd.open.bind(popupAdd));

function handleAddFormSubmit(userData) {
  popupAdd.handleLoading(true, "Добавляем...");
  const { place, pictureSrc } = userData;
  api.addNewCard(place, pictureSrc)
  .then((res) => { //получаем объект новой карточки
    const newCard = createCards(res);
    cardList.addItemPrepend(newCard);
    popupAdd.close();
    console.log(`Карточка добавлена.`)
  })
  .catch(() => {
    console.log(`Ошибка при добавлении карточки.`)
  })
  .finally(() => {
    popupAdd.handleLoading(false);
    checkAddForm.enableValidation();
  });
};

//Открытие картинки в карточке
const picturePopup = new PopupWithImage('.picture-popup');
picturePopup.setEventListeners();

function handleCardClick(link, name) {
  picturePopup.open(link, name);
};

// Удаление карточки
const popupConfirm = new PopupWithConfirm('.deletion-confirm-popup', handleDeletionConfirm);
popupConfirm.setEventListeners();

function handleTrashClick(card, cardId) {
  popupConfirm.open(card, cardId);
};

function handleDeletionConfirm(card, cardId) {
  api.deleteCard(cardId)
  .then(() => {
    card.deleteCard();
    popupConfirm.close();
    console.log(`Карточка удалена.`)
  })
  .catch(() => {
    console.log(`Ошибка при удалении карточки.`)
  });
}

// Постановка и снятие лайка
function handleLikeClick(card, cardId, action) {
  if(action == "set") {
    api.setLike(cardId)
    .then((res) => { //получаем обновленный объект карточки
      card.switchLikes(res);
    })
    .catch(() => {
      console.log(`Ошибка при постановке лайка.`)
    });
  } else if(action == "remove") {
    api.removeLike(cardId)
    .then((res) => { //получаем обновленный объект карточки
      card.switchLikes(res);
    })
    .catch(() => {
      console.log(`Ошибка при удалении лайка.`)
    });
  }
}

//Обновление аватара
const popupAvatar = new PopupWithForm('.new-avatar-popup', handleAvatarChange);
popupAvatar.setEventListeners();
buttonAvatar.addEventListener('click', popupAvatar.open.bind(popupAvatar));

function handleAvatarChange(avatarData) {
  popupAvatar.handleLoading(true, "Обновляем...");
  api.changeAvatar(avatarData.avatarSrc)
  .then((res) => { //получаем объект нового аватара 
    userInfo.setAvatar(res.avatar);
    popupAvatar.close();
  })
  .catch(() => {
    console.log(`Ошибка при обновлении аватара.`)
  })
  .finally(() => {
    popupAvatar.handleLoading(false);
    checkAvatarForm.enableValidation();
  });
}

//Функция создания карточек
function createCards(items) {
  const card = new Card(items, cardsContainer, userId, handleCardClick, handleLikeClick, handleTrashClick);
  // console.log(card);
  const cardElement = card.generateCard();
  return cardElement;
}

//Валидация 
const elementEditForm = popupEdit._popup.querySelector('.edit-popup__form');
const elementAddForm = popupAdd._popup.querySelector('.add-popup__form');
const elementAvatarForm = popupAvatar._popup.querySelector('.new-avatar-popup__form');
const checkEditForm = new FormValidator(checkForms, elementEditForm);
const checkAddForm = new FormValidator(checkForms, elementAddForm);
const checkAvatarForm = new FormValidator(checkForms, elementAvatarForm);
checkEditForm.enableValidation();
checkAddForm.enableValidation();
checkAvatarForm.enableValidation();