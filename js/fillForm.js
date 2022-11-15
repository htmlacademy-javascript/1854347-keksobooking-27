import { HOUSE } from './loading.js'

//куда вставим шаблон
const insertTemplate = document.querySelector('#map-canvas');
//находим шаблон
const searchTemplate = document.querySelector('#card').content.querySelector('.popup');
//скрываем пункт карты если нет данных
const hide = (elem) => elem.classList.add('hidden');
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
//проверка картинки аватара
const validateAvatar = (valid) => {
  if (valid) {
    return valid;
  }
  return '../img/avatars/default.png';
}
//проверка есть ли данные если нет срываем пункт
const fillForm = (card, data, teg) => {
  const popupElement = card.querySelector(teg);
  if (data) {
    popupElement.textContent = data;
  }else {
    hide(popupElement);
  }
}
//проверка данных цена
const fillPrice = (card, data, teg) => {
  const popupElement = card.querySelector(teg);
  if (data) {
    popupElement.textContent = `${data} ₽/ночь`;
  }else {
    hide(popupElement);
  }
}
//проверка данных комната
const fillRooms = (card, data, data2, teg) => {
  const popupElement = card.querySelector(teg);
  if (data) {
    popupElement.textContent = `${data} комнат(ы) для ${data2} гостей(я)`;
  }else {
    hide(popupElement);
  }
}
//проверка данных время
const fillCheckin = (card, data, data2, teg) => {
  const popupElement = card.querySelector(teg);
  if (data) {
    popupElement.textContent = `Заезд после ${data}, выезд до ${data2}`;
  }else {
    hide(popupElement);
  }
}
