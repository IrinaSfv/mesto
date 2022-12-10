//Карточки на странице
const cardsContainer = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#initialCards');

initialCards.forEach(function (item) {
  const src = item.link;
  const textContent = item.name;
  const card = createCard(src, textContent);
  cardsContainer.append(card);
});

//Переменные для редактирования профиля
const popupEdit = document.querySelector('.edit-popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
const elementEditForm = popupEdit.querySelector('.edit-popup__form');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_user-info');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

//Переменные для добавления карточки
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.add-popup');
const buttonCloseAdd = popupAdd.querySelector('.add-popup__close-button');
const elementAddForm = popupAdd.querySelector('.add-popup__form');
const placeInput = popupAdd.querySelector('.popup__input_type_place');
const linkInput = popupAdd.querySelector('.popup__input_type_link');

// Переменные для открытия картинки
const picturePopup = document.querySelector('.picture-popup');
const buttonClosePicture = picturePopup.querySelector('.picture-popup__close-button');
const pictureImage = picturePopup.querySelector('.picture-popup__image');
const pictureCaption = picturePopup.querySelector('.picture-popup__caption');

// Открытый попап на данный момент
let popupOpened;

// Функции
function createCard(src, textContent) {
  const cardTemplateClone = cardTemplate.content.cloneNode(true);
  const elementPhoto = cardTemplateClone.querySelector('.element__photo');
  const elementTitle = cardTemplateClone.querySelector('.element__title');
  const elementCard = cardTemplateClone.querySelector('.elements__card');
  const likeButton = elementCard.querySelector('.element__like-button');
  const trashButton = elementCard.querySelector('.element__trash-button');
  const buttonOpenPicture = elementCard.querySelector('.element__photo');
  elementPhoto.src = src;
  elementPhoto.alt = textContent;
  elementTitle.textContent = textContent;
  likeButton.addEventListener('click', () => handleLikeButton(likeButton));
  trashButton.addEventListener('click', () => handleTrashButton(elementCard));
  buttonOpenPicture.addEventListener('click', openPicturePopup);
  return cardTemplateClone;
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popupOpened = popup;
  document.addEventListener('keyup', handleKeyUp);
  popup.addEventListener('mousedown', handleOverlay);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popupOpened = null;
  document.removeEventListener('keyup', handleKeyUp);
  popup.removeEventListener('click', handleOverlay);
};

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

function handleLikeButton(likeButton) {
  likeButton.classList.toggle('element__like-button_active');
};

function handleTrashButton(elementCard) {
  elementCard.remove();
};

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const src = linkInput.value;
  const textContent = placeInput.value;
  const card = createCard(src, textContent);
  cardsContainer.prepend(card);
  closePopup(popupAdd);
  linkInput.value = '';
  placeInput.value = '';
};

function handleKeyUp(evt) {
  if(evt.key === 'Escape') {
    popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

function handleOverlay(evt) {
  if(!evt.target.closest('.popup__container')) {
    closePopup(evt.target.closest('.popup_opened'));
  }
};

//События
buttonEdit.addEventListener('click', openPopupForEdit);
buttonCloseEdit.addEventListener('click', closePopupForEdit);
elementEditForm.addEventListener('submit', handleEditFormSubmit);
buttonAdd.addEventListener('click', openPopupForAdd);
buttonCloseAdd.addEventListener('click', closePopupForAdd);
elementAddForm.addEventListener('submit', handleAddFormSubmit);
buttonClosePicture.addEventListener('click', closePicturePopup);