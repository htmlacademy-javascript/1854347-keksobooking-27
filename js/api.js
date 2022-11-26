import { API_URL } from './const.js';

const getSimilarOffer = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((response) => {
      onSuccess(response);
    })
    .catch((err) => {
      onFail(`Ошибка загрузки данных ${err}`);
    });
};

const sendOfferForm = (onSuccess, onFail, body) => {
  fetch(
    API_URL, {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess('Ваше объявление успешно размещено!');
      } else if (response.status >= 500 && response.status <= 505) {
        onFail('Не удалось получить данные с сервера. Попробуйте ещё раз!');
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз!');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз!');
    });
};

export {
  getSimilarOffer,
  sendOfferForm
};
