export const TITLES = [
  'Домик для букашек',
  'Три стопочки и ты дома',
  'Девичье гнездышко',
  'Сладкие подушечки',
  'Домик на дереве',
  'Сон под открытым небом',
  'Запахи охоты и рыбалки',
  'Особенности охоты и рыбалки',
  'Хижина Васька',
];

export const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

export const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

export const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

export const DESCRIPTIONS = [
  'Насладитесь умиротворением и безмятежностью в удивительном мире нового отеля с продуманной до мелочей концепцией идеального отдыха по мировым стандартам',
  'Отель расположен на берегу Средиземного моря в окружении хвойных лесов и апельсиновых садов, обладает шикарной, просторной территорией 98 500 м2;, имеет собственный пляж протяженностью в пол километра. - Широкий выбор услуг и развлечений на открытом воздухе, позволят вам насладится отдыхом, не заходя в помещение.',
  'Месторасположение: в поселке Гёйнюк, в 9 км от Кемера, в 49 км от аэропорта. На территории отеля зелёный сад. Транспорт - такси, автобус.   Описание номеров: 47 стандартные комнаты с видом на море, 326 стандартных комнат с видом на сад, ванна, телефон, фен, мини-бар безалкогольные напитки, ТВ с российскими каналами, балкон, ковровое покрытие, центральное кондиционирование, детская кровать. Смена белья 3 раза в неделю, полотенец через день. 12 семейных сюит комнат (48 кв.м, макс.4 чел., мин.',
];

export const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

//константа названий типов здаваемого помещения

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
  parking: 'паркинг',
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

export default {TITLES, TYPES, TIMES, FEATURES, DESCRIPTIONS, PHOTOS, OFFER_TYPE, OFFER_FEATURES, ELEMENT_COUNT, ROOMS_OPTION, ROOMS_ERRORS, TYPE_OPTINS, DEFAULT_COORDINATE};
