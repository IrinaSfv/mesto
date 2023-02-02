// Токен: 8121c997-2813-48cf-a521-b118f084a101
// Идентификатор: cohort-59

export default class Api {
    constructor(options) {
      this._url = options.url;
      this._token = options.token;
    }

    //Проверка ответа от сервера
    checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // 1. Загрузка информации о пользователе
    getUserData() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            }
        })
        .then(this.checkResponse);
    }

    // 2. Загрузка карточек
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            }
        })
        .then(this.checkResponse);
    }
  
    // 3. Редактирование профиля
    editProfile(userName, userAbout) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                about: userAbout,
            })
        })
        .then(this.checkResponse);
    } 

    // 4. Добавление новой карточки
    addNewCard(newName, newUrl) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                link: newUrl,
            })
        })
        .then(this.checkResponse);
    }

    // 5. Удаление карточки
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
        .then(this.checkResponse);
    }

    // 6. Постановка лайка
    setLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
        .then(this.checkResponse);
    }

    // 7. Снятие лайка
    removeLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
        .then(this.checkResponse);
    }

    // 8. Обновление аватара пользователя
    changeAvatar(avatarSrc) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatarSrc,
            })
        })
        .then(this.checkResponse);
    }
}



