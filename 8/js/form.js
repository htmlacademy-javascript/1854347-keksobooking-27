import { ROOMS_OPTION, ROOMS_ERRORS, TYPE_OPTINS } from './loading.js';

const form = document.querySelector('.ad-form');
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help'
});

const roomsField = form.querySelector('#room_number');
const capacityField = form.querySelector('#capacity');
const typeField = form.querySelector('#type');
const priceField = form.querySelector('#price');
const timeinField = form.querySelector('#timein');
const timeoutField = form.querySelector('#timeout');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const getRoomsErrorMessage = () => ROOMS_ERRORS[roomsField.value];
const validateRooms = () => ROOMS_OPTION[roomsField.value].includes(capacityField.value);
pristine.addValidator(roomsField, validateRooms, getRoomsErrorMessage);
pristine.addValidator(capacityField, validateRooms);
roomsField.addEventListener('change', () => pristine.validate(capacityField));
capacityField.addEventListener('change', () => pristine.validate(roomsField));

typeField.addEventListener('change', () => {
  priceField.placeholder = TYPE_OPTINS[typeField.value];
});

const validatePrice = () => priceField.value >= TYPE_OPTINS[typeField.value];

const getPriceErrorMessage = () => `Минимальная цена ${TYPE_OPTINS[typeField.value]}`;

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

const switchStateElements = (elements, state) => {
  elements.forEach((element) => {
    element.disabled = state;
  });
};

timeinField.addEventListener('change', () => {
  timeoutField.value = timeinField.value;
});

timeoutField.addEventListener('change', () => {
  timeinField.value = timeoutField.value;
});

const switchStateForm = (state) => {
  const fieldsets = form.querySelectorAll('fieldset');
  form.classList.toggle('ad-form--disabled', state);
  switchStateElements(fieldsets, state);
};

const switchStateFilter = (state) => {
  const filter = document.querySelector('.map__filters');
  const selects = filter.querySelectorAll('select');
  const fieldsets = filter.querySelectorAll('fieldset');
  filter.classList.toggle('map__filters--disabled', state);
  switchStateElements(selects, state);
  switchStateElements(fieldsets, state);
};

const switchStatePage = (state) => {
  switchStateForm(state);
  switchStateFilter(state);
};

const deactivatePage = () => switchStatePage(true);

const activatePage = () => switchStatePage(false);

export { deactivatePage, activatePage };
