export const OFFER_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};
export const WORDS = {
  rooms: ['комнатa', 'комнаты', 'комнат'],
  guests: ['гостя', 'гостей', 'гостей'],
};
export const COUNTS = {
  ONE: 1,
  ELEVEN: 11,
  TWO: 2,
  FOUR: 4,
  TEN: 10,
  TWENTY: 20,
  ONE_HUNDRED: 100,
};

export const DEFAULT_VALUE = 'any';
export const MIN_PRICE = 100;
export const MAX_PRICE = 100000;

export const DEFAULT_COORDINATE = {
  lat: 35.6895000,
  lng: 139.6917100,
};

export const ZOOM_MAP = 12;
export const SIMILAR_AD_COUNT = 10;
export const API_URL = 'https://27.javascript.pages.academy/keksobooking';
export const FILE_TYPES = ['jpg', 'jpeg', 'png'];
export const ALERT_SHOW_TIME = 5000;

export const ROOMS_OPTION = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

export const GUESTS_TO_ROOMS = {
  0: ['100'],
  1: ['1', '2', '3'],
  2: ['1', '2'],
  3: ['3'],
};

export const TYPE_OPTINS = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

export const COORDINATE_ROUNDING = 5;

export default {COORDINATE_ROUNDING,
  GUESTS_TO_ROOMS,
  ALERT_SHOW_TIME,
  FILE_TYPES,
  ZOOM_MAP,
  SIMILAR_AD_COUNT,
  DEFAULT_COORDINATE,
  DEFAULT_VALUE,
  MIN_PRICE,
  MAX_PRICE,
  COUNTS,
  WORDS,
  API_URL,
  OFFER_TYPE,
  ROOMS_OPTION,
};
