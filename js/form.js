import {
  renderPhoto
} from './photos.js';

const filterForm = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');

const mapFormBlocks = filterForm.children;
const adFormBlocks = adForm.children;

const avatarForm = adForm.querySelector('.ad-form-header__input');
const avatarPreviewForm = adForm.querySelector('.ad-form-header__preview img');
const photoForm = adForm.querySelector('.ad-form__input');
const photoPreviewForm = adForm.querySelector('.ad-form__photo-preview img');

const setDisabled = (elements) => {
  for (const element of elements) {
    element.disabled = true;
  }
};

const disablePage = () => {
  filterForm.classList.add('map__filters--disabled');
  setDisabled(mapFormBlocks);
  adForm.classList.add('ad-form--disabled');
  setDisabled(adFormBlocks);
};

disablePage();

const setEnabled = (elements) => {
  for (const element of elements) {
    element.disabled = false;
  }
};

const activateAd = () => {
  adForm.classList.remove('ad-form--disabled');
  setEnabled(adFormBlocks);
  avatarForm.addEventListener('change', () => renderPhoto(avatarForm, avatarPreviewForm));
  photoForm.addEventListener('change', () => renderPhoto(photoForm, photoPreviewForm));
};

const activateMapFilter = () => {
  filterForm.classList.remove('map__filters--disabled');
  setEnabled(mapFormBlocks);
};

export {
  avatarPreviewForm,
  photoPreviewForm,
  disablePage,
  activateAd,
  activateMapFilter
};
