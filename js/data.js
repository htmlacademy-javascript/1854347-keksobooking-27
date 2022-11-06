import { TITLES, TYPES, TIMES, FEATURES, DESCRIPTIONS, PHOTOS } from './loading.js';
import { getRandomInteger, getCordinatePoint, arrayRandElement, randomNumber } from './util.js';

function getArray(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomInteger(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomInteger(0, maxLength - 1);
    const el = features[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}
const location = {
  lat: getCordinatePoint(35.65, 35.7, 5),
  lng: getCordinatePoint(139.7, 139.8, 5),
};

//создание объекта
const createObject = () => ({
  author: {
    avatar: `img/avatars/user${randomNumber()}.png`,
  },
  offer: {
    title: arrayRandElement(TITLES),
    price: getRandomInteger(1000, 10000),
    address: `${location.lat}, ${location.lng}`,
    type: arrayRandElement(TYPES),
    rooms: getRandomInteger(1, 5),
    quests: getRandomInteger(1, 5),
    checkin: arrayRandElement(TIMES),
    checkout: arrayRandElement(TIMES),
    features: getArray(FEATURES),
    description: arrayRandElement(DESCRIPTIONS),
    photos: getArray(PHOTOS),
  },
  location
});

export const getArrElement = (COUNT_ELEMENT = 1) =>
  Array.from({ length: COUNT_ELEMENT }, createObject);
