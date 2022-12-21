// Переменные для открытия попапа с картинкой
const picturePopup = document.querySelector('.picture-popup');
const pictureImage = picturePopup.querySelector('.picture-popup__image');
const pictureCaption = picturePopup.querySelector('.picture-popup__caption');

// Открытый попап на данный момент
let popupOpened;

export { picturePopup, pictureImage, pictureCaption, popupOpened };

// Функции работы попапов
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    popupOpened = popup;
    document.addEventListener('keyup', handleKeyUp);
    popup.addEventListener('mousedown', handleOverlay);
  };

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popupOpened = null;
    document.removeEventListener('keyup', handleKeyUp);
    popup.removeEventListener('click', handleOverlay);
  };

export function handleKeyUp(evt) {
    if(evt.key === 'Escape') {
      popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
    }
  };
  
export function handleOverlay(evt) {
    if(!evt.target.closest('.popup__container')) {
      closePopup(evt.target.closest('.popup_opened'));
    }
  };