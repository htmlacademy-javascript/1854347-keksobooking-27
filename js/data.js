import { TITLES, TYPES, TIMES, FEATURES, DESCRIPTIONS, PHOTOS } from './loading.js';
import { getRandomInteger, getRandArray, arrayRandElement } from './util.js';

const getAvatarFunction = () => {
  return () => {
    return `img/avatars/user${getRandomInteger(1, 10)}.png`;
  };
};


export const getAvatar = getAvatarFunction();

export const getRandomFeatures = () => getRandArray(FEATURES);
export const getRandomPhotos = () => getRandArray(PHOTOS);
export const getRandomDescription = () => arrayRandElement(DESCRIPTIONS);
export const getRandomTitle = () => arrayRandElement(TITLES);
export const getRandomType = () => arrayRandElement(TYPES);
export const getRandomTime = () => arrayRandElement(TIMES);

export default{
  getAvatar,
  getRandomFeatures,
  getRandomPhotos,
  getRandomDescription,
  getRandomTitle,
  getRandomType,
  getRandomTime
}
