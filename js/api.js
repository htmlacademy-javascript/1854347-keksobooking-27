const GET_LINK = 'https://27.javascript.pages.academy/keksobooking/data';
const SEND_LINK = 'https://27.javascript.pages.academy/keksobooking';
const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(GET_LINK);
    if (!response.ok) {
      throw new Error('Не удалось загрузить данные');
    }
    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(SEND_LINK, {
      method: 'POST',
      body,
    });

    if (!response.ok) {
      throw new Error('Не удалось отправить данные. Попробуйте еще раз');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export { getData, sendData };
