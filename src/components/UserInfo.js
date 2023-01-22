export default class UserInfo {
    constructor({profileNameSelector, profileJobSelector}) {
    this._profileName = document.querySelector(profileNameSelector); //элемент имени пользователя
    this._profileJob = document.querySelector(profileJobSelector); //элемент информации о себе
  } 
  
    getUserInfo() { // возвращает объект с данными пользователя
      return {
        profileName: this._profileName.textContent,
        profileJob: this._profileJob.textContent
      };
    }

    setUserInfo(userData) { // принимает новые данные пользователя и добавляет их на страницу
      this._profileName.textContent = userData['name-input'];
      this._profileJob.textContent = userData['userInfo-input'];
    }
  }