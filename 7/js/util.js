export const getRandomInteger = (min, max) => {
  if (isFinite(min) && isFinite(max)) {
    const a = Math.min(Math.abs(min), Math.abs(max));
    const b = Math.max(Math.abs(min), Math.abs(max));
    return Math.trunc(Math.random() * (b - a)) + a;
  } else {
    return 'Не число!!';
  }
};

export const arrayRandElement = (items) => items[getRandomInteger(0, items.length - 1)];

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


export const getRandArray = (array) => {
  const result = array.filter(() => getRandomInteger(0, 1));
  if (result.length === 0) {
    result.push(arrayRandElement(array));
  }
  return result;
};

export default {getRandomInteger, getRandomFloat, arrayRandElement, getRandArray };
