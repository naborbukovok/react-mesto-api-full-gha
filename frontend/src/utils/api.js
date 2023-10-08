class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }

  // Загрузка информации о пользователе с сервера (GET).
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: 'include'
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Загрузка карточек с сервера (GET).
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      credentials: 'include'
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Редактирование аватара (PATCH).
  setAvatar(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ avatar }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Редактирование профиля (PATCH).
  setUserInfo(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ name, about }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Добавление новой карточки (POST).
  postCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ name, link }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Удаление карточки (DELETE).
  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      credentials: 'include',
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Добавление лайка (PUT).
  addLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      credentials: 'include',
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  // Удаление лайка (DELETE).
  removeLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      credentials: 'include',
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }
}

const api = new Api({
  baseUrl: "https://api.mesto.naborbukovok.nomoredomainsrocks.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
