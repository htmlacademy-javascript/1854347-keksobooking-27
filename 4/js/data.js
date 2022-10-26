import { TITLES, TYPES, TIMES, FEATURES, DESCRIPTIONS, PHOTOS } from './loading.js';
import { getRandomInteger, getCordinatePoint, arrayRandElement } from './util.js';

export const getAvatar = () => {
  const index = `0${getRandomInteger(1, 10)}`.slice(-2);
  return `img/avatars/user${index}.png`;
};

export const getRandomArray = () => (
  {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: arrayRandElement(TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(1, 1000),
      type: arrayRandElement(TYPES),
      rooms: getRandomInteger(1,10),
      guests: getRandomInteger(1,10),
      checkin: arrayRandElement(TIMES),
      checkout: arrayRandElement(TIMES),
      features: FEATURES.slice(0, getRandomInteger(1, FEATURES.length)),
      description: arrayRandElement(DESCRIPTIONS),
      photos: PHOTOS.slice(0, getRandomInteger(1, PHOTOS.length)),
    },
    location: {
      lat: getCordinatePoint(35.65, 35.7, 5),
      lng: getCordinatePoint(139.7, 139.8, 5),
    },
  }
);

export default {getRandomArray};
