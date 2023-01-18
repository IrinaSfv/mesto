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

    setUserInfo(data) { // принимает новые данные пользователя и добавляет их на страницу
      this._profileName.textContent = Object.values(data)[0];
      this._profileJob.textContent = Object.values(data)[1];
    }
  }