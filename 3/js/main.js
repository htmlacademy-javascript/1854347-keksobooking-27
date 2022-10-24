const getRandomInteger = (min, max) => {
  if (isFinite(min) && isFinite(max)) {
    const a = Math.min(Math.abs(min), Math.abs(max));
    const b = Math.max(Math.abs(min), Math.abs(max));
    return Math.trunc(Math.random() * (b - a)) + a;
  } else {
    return 'Не число!!';
  }
};

const getCordinatePoint = (min, max, comma = 1) => {
  if (isFinite(min) && isFinite(max) && isFinite(comma)) {
    const a = Math.min(Math.abs(min), Math.abs(max));
    const b = Math.max(Math.abs(min), Math.abs(max));
    const num = Math.random() * (b - a) + a;
    return num.toFixed(Math.abs(comma));
  } else {
    return 'Не число!!';
  }
};

getRandomInteger(1, 100);
getCordinatePoint(1, 2000, 2);

const TITLES = [
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

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Насладитесь умиротворением и безмятежностью в удивительном мире нового отеля с продуманной до мелочей концепцией идеального отдыха по мировым стандартам',
  'Отель расположен на берегу Средиземного моря в окружении хвойных лесов и апельсиновых садов, обладает шикарной, просторной территорией 98 500 м2;, имеет собственный пляж протяженностью в пол километра. - Широкий выбор услуг и развлечений на открытом воздухе, позволят вам насладится отдыхом, не заходя в помещение.',
  'Месторасположение: в поселке Гёйнюк, в 9 км от Кемера, в 49 км от аэропорта. На территории отеля зелёный сад. Транспорт - такси, автобус.   Описание номеров: 47 стандартные комнаты с видом на море, 326 стандартных комнат с видом на сад, ванна, телефон, фен, мини-бар безалкогольные напитки, ТВ с российскими каналами, балкон, ковровое покрытие, центральное кондиционирование, детская кровать. Смена белья 3 раза в неделю, полотенец через день. 12 семейных сюит комнат (48 кв.м, макс.4 чел., мин.',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const COUNT_ELEMENT = 10;

const arrayRandElement = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const getAvatar = () => {
  const index = `0${getRandomInteger(1, 10)}`.slice(-2);
  return `img/avatars/user${index}.png`;
};

const getRandomArray = () => (
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
      gests: getRandomInteger(1,10),
      checkin: arrayRandElement(TIMES),
      checkout: arrayRandElement(TIMES),
      features: arrayRandElement(FEATURES),
      description: arrayRandElement(DESCRIPTIONS),
      photos: arrayRandElement(PHOTOS),
    },
    location: {
      lat: getCordinatePoint(35.65, 35.7, 5),
      lng: getCordinatePoint(139.7, 139.8, 5),
    },
  }
);

Array.from({ length: COUNT_ELEMENT }, getRandomArray);
