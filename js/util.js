export const getRandomInteger = (min, max) => {
  if (isFinite(min) && isFinite(max)) {
    const a = Math.min(Math.abs(min), Math.abs(max));
    const b = Math.max(Math.abs(min), Math.abs(max));
    return Math.trunc(Math.random() * (b - a)) + a;
  } else {
    return 'Не число!!';
  }
};

export const getCordinatePoint = (min, max, comma = 1) => {
  if (isFinite(min) && isFinite(max) && isFinite(comma)) {
    const a = Math.min(Math.abs(min), Math.abs(max));
    const b = Math.max(Math.abs(min), Math.abs(max));
    const num = Math.random() * (b - a) + a;
    return num.toFixed(Math.abs(comma));
  } else {
    return 'Не число!!';
  }
};

export const randomNumber = () => {
  const id = getRandomInteger(1, 10);
  if (id <10)
  {return (`0${id}`);
  } else {
    (`${id}`);
  }
};

export const arrayRandElement = (items) => items[getRandomInteger(0, items.length - 1)];

export default {getRandomInteger, getCordinatePoint, arrayRandElement, randomNumber};

