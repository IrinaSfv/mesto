//Карточки
// const cardList = new Section({ 
//     items: initialCards,  
//     renderer: (item) => {
//       const cardElement = createCards(item);
//       cardList.addItem(cardElement);
//     }
//   }, '.elements__list'
// );

export const cardsContainer = document.querySelector('.card-template');

//Валидация 
export const checkForms = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//Переменные для редактирования аватара
export const buttonAvatar = document.querySelector('.profile__avatar-edit-button');

//Переменные для редактирования профиля
export const buttonEdit = document.querySelector('.profile__edit-button');
export const inputName = document.querySelector('#name-input');
export const inputJob = document.querySelector('#userInfo-input');

//Переменные для добавления карточки
export const buttonAdd = document.querySelector('.profile__add-button');