import { getArrElement } from './data.js';



export const creatArrElement = (index) => {
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
    clone.querySelector('.popup__avatar').src = validateAvatar(author.avatar);
    //clone.querySelector('.popup__title').textContent = (offer.title);
    fillForm(clone, offer.title, '.popup__title');
    //clone.querySelector('.popup__text--address').textContent = offer.address;
    fillForm(clone, offer.address, '.popup__text--address');
    //clone.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    fillPrice(clone, offer.price, '.popup__text--price');
    //clone.querySelector('.popup__type').textContent = HOUSE[offer.type];
    fillForm(clone, HOUSE[offer.type], '.popup__type');
    //clone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат(ы) для ${offer.guests} гостей(я)`;
    fillRooms(clone, offer.rooms, offer.guests, '.popup__text--capacity')
    //clone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    fillCheckin(clone, offer.checkin, offer.checkout, '.popup__text--time');
    //clone.querySelector('.popup__description').textContent = offer.description;
    fillForm(clone, offer.description, '.popup__description');
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
