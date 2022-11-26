import {OFFER_TYPE, WORDS, COUNTS} from './const.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const getWords = (count, word) => {
  const num = count % COUNTS.ONE_HUNDRED;
  const mod = num % COUNTS.TEN;
  if (num !== COUNTS.ELEVEN && mod === COUNTS.ONE) {
    return WORDS[word][0];
  } else if (mod >= COUNTS.TWO && mod <= COUNTS.FOUR && (num < COUNTS.TEN || num > COUNTS.TWENTY)) {
    return WORDS[word][1];
  } else {
    return WORDS[word][2];
  }
};

const createFeatures = (features) => {
  const featuresFragment = document.createDocumentFragment();
  features.forEach((element) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature', `popup__feature--${element}`);
    featuresFragment.appendChild(feature);
  });
  return featuresFragment;
};

const createPhotos = (template, photosSrc, offerTitle) => {
  const photosFragment = document.createDocumentFragment();
  photosSrc.forEach((photoSrc) => {
    const newPhoto = template.cloneNode(false);
    newPhoto.src = photoSrc;
    newPhoto.alt = `${newPhoto.alt} к объявлению ${offerTitle}`;
    photosFragment.appendChild(newPhoto);
  });
  return photosFragment;
};

const offerToCard = ({
  author,
  offer,
}) => {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.popup__title');
  if (offer.title) {
    cardTitle.textContent = offer.title;
  } else {
    cardTitle.remove();
  }
  const cardAddress = card.querySelector('.popup__text--address');
  if (offer.address) {
    cardAddress.textContent = offer.address;
  } else {
    cardAddress.remove();
  }
  const cardPrice = card.querySelector('.popup__text--price');
  if (offer.price) {
    cardPrice.textContent = `${offer.price} \u20bd/ночь`;
  } else {
    cardPrice.textContent = 'Бесплатно';
  }
  const cardType = card.querySelector('.popup__type');
  if (OFFER_TYPE[offer.type]) {
    cardType.textContent = OFFER_TYPE[offer.type];
  } else {
    cardType.remove();
  }
  const cardCapacity = card.querySelector('.popup__text--capacity');
  if (offer.rooms && offer.guests) {
    cardCapacity.textContent = `${offer.rooms} ${getWords(offer.rooms, 'rooms')} для ${offer.guests} ${getWords(offer.guests, 'guests')}`;
  } else {
    cardCapacity.remove();
  }
  const cardTime = card.querySelector('.popup__text--time');
  if (offer.checkin && offer.checkout) {
    cardTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    cardTime.remove();
  }
  const cardDescription = card.querySelector('.popup__description');
  if (offer.description) {
    cardDescription.textContent = offer.description;
  } else {
    cardDescription.remove();
  }
  const cardFeatures = card.querySelector('.popup__features');
  if (offer.features && offer.features.length) {
    cardFeatures.innerHTML = '';
    cardFeatures.appendChild(createFeatures(offer.features));
  } else {
    cardFeatures.remove();
  }
  const cardPhotos = card.querySelector('.popup__photos');
  if (offer.photos && offer.photos.length) {
    const photoTemplate = card.querySelector('.popup__photo').cloneNode(false);
    cardPhotos.innerHTML = '';
    cardPhotos.appendChild(createPhotos(photoTemplate, offer.photos, offer.title));
  } else {
    cardPhotos.remove();
  }
  const cardAvatar = card.querySelector('.popup__avatar');
  if (author.avatar) {
    cardAvatar.src = author.avatar;
  } else {
    cardAvatar.remove();
  }
  return card;
};

export {
  offerToCard
};
