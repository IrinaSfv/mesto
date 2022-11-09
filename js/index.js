let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button'); 


editButton.addEventListener('click', function (popupOpen) {
    popup.classList.add('popup_opened')
  })

closeButton.addEventListener('click', function (popupClose) {
    popup.classList.remove('popup_opened')
  })


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__user-info');

function formSubmitHandler(evt) {
    evt.preventDefault();
    let newNameInput = document.querySelector('.profile__title');
    let newJobInput = document.querySelector('.profile__description');
    newNameInput.textContent = nameInput.value;
    newJobInput.textContent = jobInput.value;
    popup.classList.remove('popup_opened');

}
formElement.addEventListener('submit', formSubmitHandler); 