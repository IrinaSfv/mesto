//Переменные
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button'); 
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_user-info');

// Функции
function popupOpen() {
  popup.classList.add('popup_opened')
}

function popupClose() {
  popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  let newNameInput = document.querySelector('.profile__title');
  let newJobInput = document.querySelector('.profile__description');
  newNameInput.textContent = nameInput.value;
  newJobInput.textContent = jobInput.value;
  popup.classList.remove('popup_opened');

}

//События
editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler); 