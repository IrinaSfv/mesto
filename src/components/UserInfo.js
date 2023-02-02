export default class UserInfo {
    constructor({profileNameSelector, profileJobSelector, profileAvatarSelector}) {
    this._profileName = document.querySelector(profileNameSelector); //элемент имени пользователя
    this._profileJob = document.querySelector(profileJobSelector); //элемент информации о себе
    this._avatar = document.querySelector(profileAvatarSelector);
  } 
  
    getUserInfo() { // возвращает объект с данными пользователя
      const profileInfo = {};
      profileInfo.name = this._profileName.textContent,
      profileInfo.job = this._profileJob.textContent;
      return profileInfo;
    }

    setUserInfo(inputName, inputJob) { // принимает новые данные пользователя и добавляет их на страницу
      this._profileName.textContent = inputName;
      this._profileJob.textContent = inputJob;
    }

    setAvatar(newAvatar) {
      this._avatar.src = newAvatar;
    }
  }