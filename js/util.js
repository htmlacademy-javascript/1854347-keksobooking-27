const ALERT_SHOW_TIME = 5000;

export const getRandomInteger = (min, max) => {
  if (isFinite(min) && isFinite(max)) {
    const a = Math.min(Math.abs(min), Math.abs(max));
    const b = Math.max(Math.abs(min), Math.abs(max));
    return Math.trunc(Math.random() * (b - a)) + a;
  } else {
    return 'Не число!!';
  }
};

export const getRandomFloat = (min, max, comma = 1) => {
  if (isFinite(min) && isFinite(max) && isFinite(comma)) {
    const a = Math.min(Math.abs(min), Math.abs(max));
    const b = Math.max(Math.abs(min), Math.abs(max));
    const num = Math.random() * (b - a) + a;
    return num.toFixed(Math.abs(comma));
  } else {
    return 'Не число!!';
  }
};

export const arrayRandElement = (items) => items[getRandomInteger(0, items.length - 1)];

export const getRandArray = (array) => {
  const result = array.filter(() => getRandomInteger(0, 1));
  if (result.length === 0) {
    result.push(arrayRandElement(array));
  }
  return result;
};

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('modal-alert');
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export default {getRandomInteger, getRandomFloat, arrayRandElement, getRandArray, showAlert, debounce };

