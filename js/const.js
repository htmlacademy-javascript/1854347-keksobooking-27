export const OFFER_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

export const OFFER_FEATURES = {
  wifi: 'Вай-фай',
  dishwasher: 'Посудомоечная машина',
  parking: 'Паркинг',
  washer: 'Стиральная машина',
  elevator: 'Лифт',
  conditioner: 'Кондиционер'
};

export const ROOMS_ERRORS = {
  1: 'Только для 1 гостя',
  2: 'Для 2 гостей и меньше',
  3: 'Для 3 гостей и меньше',
  100: 'Не для гостей'
};

export const ROOMS_OPTION = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

export const TYPE_OPTINS = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

export const ELEMENT_COUNT = 10;

export const DEFAULT_COORDINATE = {
  lat: 35.6895000,
  lng: 139.6917100,
};

export const API_URL = 'https://27.javascript.pages.academy/keksobooking';
export const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export default { API_URL, OFFER_TYPE, OFFER_FEATURES, ELEMENT_COUNT, ROOMS_OPTION, ROOMS_ERRORS, TYPE_OPTINS, DEFAULT_COORDINATE, FILE_TYPES};
