export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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

// Переменные для открытия попапа с картинкой
// export const picturePopup = document.querySelector('.picture-popup');
// export const pictureImage = picturePopup.querySelector('.picture-popup__image');
// export const pictureCaption = picturePopup.querySelector('.picture-popup__caption');

//Переменные для редактирования профиля
// export const popupEdit = document.querySelector('.edit-popup');
export const buttonEdit = document.querySelector('.profile__edit-button');
// export const buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
// export const nameInput = popupEdit.querySelector('.popup__input_type_name');
// export const jobInput = popupEdit.querySelector('.popup__input_type_user-info');
// export const profileName = document.querySelector('.profile__title');
// export const profileJob = document.querySelector('.profile__description');

//Переменные для добавления карточки
export const buttonAdd = document.querySelector('.profile__add-button');
// export const popupAdd = document.querySelector('.add-popup');
// export const buttonCloseAdd = popupAdd.querySelector('.add-popup__close-button');
// export const placeInput = popupAdd.querySelector('.popup__input_type_place');
// export const linkInput = popupAdd.querySelector('.popup__input_type_link');
// export const submitAddButton = popupAdd.querySelector('.add-popup__submit-button');

// Переменные для закрытия картинки
//export const buttonClosePicture = picturePopup.querySelector('.picture-popup__close-button');

//Переменные для валидации форм 
export const elementEditForm = popupEdit.querySelector('.edit-popup__form');
export const elementAddForm = popupAdd.querySelector('.add-popup__form');
