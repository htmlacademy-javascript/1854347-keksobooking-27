import {API_URL} from './const.js';

const sendOfferForm = (formData, onSuccess, onFail) =>{
  fetch(API_URL,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

const getSimilarOffer = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      onFail();
    });
};

export { getSimilarOffer, sendOfferForm };
