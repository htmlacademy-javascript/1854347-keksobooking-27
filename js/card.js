import { getArrElement } from './data.js';
//константа названий типов здаваемого помещения
const HOUSE = {
  flat: 'Квартира ',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
//генерируем раздел
const getCloneFeatures = (features, cloneFeatures) => {
  features.forEach((element) => {
    const feature = document.createElement('li');

    feature.classList.add('popup__feature', `popup__feature--${element}`);
    cloneFeatures.append(feature);
  });
};
//генерируем раздел
const getClonePhotos = (photos, clonePhotos, clonePhoto) => {
  photos.forEach((element) => {
    const photo = clonePhoto.cloneNode(true);

    photo.src = element;
    clonePhotos.append(photo);
  });
};
//

//куда вставим шаблон
const insertTemplate = document.querySelector('#map-canvas');
//находим шаблон
const searchTemplate = document.querySelector('#card').content.querySelector('.popup');

export const creatArrElement =(index) => {
//генератор наполнения
  const dataUsers = getArrElement(index);
//запуск наполнеия
  dataUsers.forEach((element) => {
    const {
      author,
      offer,
    } = element;
    //клонируем шаблон
    const clone = searchTemplate.cloneNode(true);
    //наполняем шаблон данными
    clone.querySelector('.popup__avatar').src = author.avatar;
    clone.querySelector('.popup__title').textContent = offer.title;
    clone.querySelector('.popup__text--address').textContent = offer.address;
    clone.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    clone.querySelector('.popup__type').textContent = HOUSE[offer.type];
    clone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат(ы) для ${offer.guests} гостей(я)`;
    clone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    clone.querySelector('.popup__description').textContent = offer.description;
    const cloneFeatures = clone.querySelector('.popup__features');
    const clonePhotos = clone.querySelector('.popup__photos');
    const clonePhoto = clone.querySelector('.popup__photo');
    //проверяем раздел features на наличие данных
    if (offer.features.length > 0) {
      cloneFeatures.innerHTML = '';
      getCloneFeatures(offer.features, cloneFeatures);
    } else {
      cloneFeatures.remove();
    }
    //проверяем раздел photos на наличие данных
    if (offer.photos.length > 0) {
      clonePhotos.innerHTML = '';
      getClonePhotos(offer.photos, clonePhotos, clonePhoto);
    } else {
      cloneFeatures.remove();
    }
    //вставляем шаблон с данными в разметку
    insertTemplate.appendChild(clone);
  });
};
