//Карточки на странице
const cardsContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#initialCards');
const initialCards = [
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

initialCards.forEach(function (item) {
  const src = item.link;
  const textContent = item.name;
  const card = createCard(src, textContent);
  cardsContainer.append(card);
});

//Переменные для редактирования профиля
const popupForEdit = document.querySelector('.edit-popup');
const buttonForEdit = document.querySelector('.profile__edit-button');
const buttonCloseEdit = popupForEdit.querySelector('.popup__close-button');
const elementOfEditForm = popupForEdit.querySelector('.edit-popup__form');
const nameInput = popupForEdit.querySelector('.popup__input_type_name');
const jobInput = popupForEdit.querySelector('.popup__input_type_user-info');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

//Переменные для добавления карточки
const buttonForAdd = document.querySelector('.profile__add-button');
const popupForAdd = document.querySelector('.add-popup');
const buttonCloseAdd = popupForAdd.querySelector('.add-popup__close-button');
const elementOfAddForm = popupForAdd.querySelector('.add-popup__form');
const placeInput = popupForAdd.querySelector('.popup__input_type_place');
const linkInput = popupForAdd.querySelector('.popup__input_type_link');

//Переменные для удаления карточки
const trashButton = document.querySelectorAll('.element__trash-button');

// Переменные для лайка карточки
const likeButton = document.querySelectorAll('.element__like-button');

// Переменные для открытия картинки
const buttonForOpenPicture = document.querySelectorAll('.element__photo');
const picturePopup = document.querySelector('.picture-popup');
const buttonForClosePicture = picturePopup.querySelector('.picture-popup__close-button');
const pictureImage = picturePopup.querySelector('.picture-popup__image');
const pictureCaption = picturePopup.querySelector('.picture-popup__caption');

// Функции
function createCard(src, textContent) {
  const cardTemplateClone = cardTemplate.content.cloneNode(true);
  cardTemplateClone.querySelector('.element__photo').src = src;
  cardTemplateClone.querySelector('.element__photo').alt = textContent;
  cardTemplateClone.querySelector('.element__title').textContent = textContent;
  return cardTemplateClone;
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function openPopupForEdit() {
  openPopup(popupForEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

function closePopupForEdit() {
  closePopup(popupForEdit);
};

function openPopupForAdd() {
  openPopup(popupForAdd);
};

function closePopupForAdd() {
  closePopup(popupForAdd);
};

function openPicturePopup(evt) {
  openPopup(picturePopup);
  const eventTarget = evt.target;
  const src = eventTarget.closest('.element__photo').src;
  const textContent = eventTarget.closest('.element__photo').alt;
  pictureImage.src = src;
  pictureImage.alt = textContent;
  pictureCaption.textContent = textContent;
};

function closePicturePopup() {
  closePopup(picturePopup);
};

function handleLikeButton(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle('element__like-button_active');
};

function handleTrashButton(evt) {
  const eventTarget = evt.target;
  const itemToDelete = eventTarget.closest('.elements__card');
  itemToDelete.remove();
};

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupForEdit);
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const src = linkInput.value;
  const textContent = placeInput.value;
  const card = createCard(src, textContent);
  cardsContainer.prepend(card);
  closePopup(popupForAdd);
  const trashButton = document.querySelector('.element__trash-button');
  const likeButton = document.querySelector('.element__like-button');
  const buttonForOpenPicture = document.querySelector('.element__photo');
  trashButton.addEventListener('click', handleTrashButton);
  likeButton.addEventListener('click', handleLikeButton);
  buttonForOpenPicture.addEventListener('click', openPicturePopup);
  linkInput.value = '';
  placeInput.value = '';
};

//События
buttonForEdit.addEventListener('click', openPopupForEdit);
buttonCloseEdit.addEventListener('click', closePopupForEdit);
elementOfEditForm.addEventListener('submit', handleEditFormSubmit);
buttonForAdd.addEventListener('click', openPopupForAdd);
buttonCloseAdd.addEventListener('click', closePopupForAdd);
elementOfAddForm.addEventListener('submit', handleAddFormSubmit);
buttonForClosePicture.addEventListener('click', closePicturePopup);
likeButton.forEach(function (item) {
    item.addEventListener('click', handleLikeButton);
});
trashButton.forEach(function (item) {
    item.addEventListener('click', handleTrashButton);
});
buttonForOpenPicture.forEach(function (item) {
    item.addEventListener('click', openPicturePopup);
});
