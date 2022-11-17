import { getRandomInteger, getRandomFloat } from './util.js';
import {ELEMENT_COUNT} from './loading.js';
import {
  getAvatar,
  getRandomFeatures,
  getRandomPhotos,
  getRandomDescription,
  getRandomTitle,
  getRandomType,
  getRandomTime
} from './data.js';

export const creatArrElement = () => {
  const location = {
    lat: getRandomFloat(35.65, 35.7, 5),
    lng: getRandomFloat(139.7, 139.8, 5)
  };
  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomTitle(),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(1000, 1000000),
      type: getRandomType(),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: getRandomTime(),
      checkout: getRandomTime(),
      features: getRandomFeatures(),
      description: getRandomDescription(),
      photos: getRandomPhotos(),
    },
    location: location,
  };
};

const creatArrElements = () => Array.from({ length: ELEMENT_COUNT }, creatArrElement);

export { creatArrElements };
