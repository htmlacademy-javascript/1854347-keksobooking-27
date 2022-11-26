import {
  mainPin,
  map,
} from './map.js';

import {
  DEFAULT_COORDINATE,
  ZOOM_MAP,
  COORDINATE_ROUNDING,
  TYPE_OPTINS,
  GUESTS_TO_ROOMS,
  ROOMS_OPTION,
} from './const.js';

import {
  sendOfferForm,
} from './api.js';

import {
  showSuccessModal,
  showErrorModal
} from './message.js';


const filterForm = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');
// Переменная элемента количества мест, которая находится в форме и имеет соответствующее name
const capacityElement = adForm.querySelector('#capacity');
// Переменная элемента количества комнат, которая находится в форме и имеет соответствующее name
const roomNumberElement = adForm.querySelector('#room_number');
// Переменная тип жилья
const typeForm = adForm.querySelector('#type');
//Переменная цена
const priceForm = adForm.querySelector('#price');
const timeinForm = adForm.querySelector('#timein');
//Переменная время выезда
const timeOutForm = adForm.querySelector('#timeout');
const addressForm = adForm.querySelector('#address');
const resetButton = adForm.querySelector('.ad-form__reset');
const sliderForm = adForm.querySelector('.ad-form__slider');
const SliderConfig = {
  MIN: 0,
  MAX: 100000,
  START: priceForm.placeholder,
  STEP: 1,
};
// Пристин, присваиваем классы
const pristine = new Pristine(
  adForm,
  {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    errorTextParent: 'ad-form__element',
  },
  true
);
noUiSlider.create(sliderForm, {
  range: {
    min: SliderConfig.MIN,
    max: SliderConfig.MAX,
  },
  start: SliderConfig.START,
  step: SliderConfig.STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    form: function(value) {
      return value;
    },
    from: function(value) {
      return parseFloat(value);
    },
  },
});

sliderForm.noUiSlider.on('update', () => {
  priceForm.value = sliderForm.noUiSlider.get();
});

const validateCapacity = () =>
  ROOMS_OPTION[roomNumberElement.value].includes(capacityElement.value);

const getCapacityErrorMessage = () =>
  `Указанное количество комнат вмещает ${ROOMS_OPTION[roomNumberElement.value].join(' или ')} гостей.`;

const getRoomNumberErrorMessage = () =>
  `Указанное количество гостей требует ${GUESTS_TO_ROOMS[capacityElement.value].join(' или ')} комнаты.`;

const onCapacityChange = () => {
  pristine.validate(capacityElement);
  pristine.validate(roomNumberElement);
};

const onRoomNumberChange = () => {
  pristine.validate(capacityElement);
  pristine.validate(roomNumberElement);
};

pristine.addValidator(
  capacityElement,
  validateCapacity,
  getCapacityErrorMessage
);

pristine.addValidator(
  roomNumberElement,
  validateCapacity,
  getRoomNumberErrorMessage
);

const getTypeChange = () => {
  priceForm.placeholder = TYPE_OPTINS[typeForm.value];
  priceForm.min = TYPE_OPTINS[typeForm.value];
};

const getPriceChange = (evt) => {
  const target = evt.target;
  if (target.validity.rangeUnderflow) {
    priceForm.setCustomValidity(`Укажите стоимость не ниже ${target.min}`);
  } else if (target.validity.rangeOverflow) {
    priceForm.setCustomValidity(`Укажите стоимость не выше ${target.max}`);
  } else if (target.validity.valueMissing) {
    priceForm.setCustomValidity('Обязательное поле для заполнения!');
  } else {
    priceForm.setCustomValidity('');
  }
  priceForm.reportValidity();
};

const getTimeInChange = () => {
  timeinForm.value = timeOutForm.value;
};

const getTimeOutChange = () => {
  timeOutForm.value = timeinForm.value;
};

capacityElement.addEventListener('change', onCapacityChange);
roomNumberElement.addEventListener('change', onRoomNumberChange);
typeForm.addEventListener('change', getTypeChange);
priceForm.addEventListener('input', getPriceChange);
timeinForm.addEventListener('change', getTimeOutChange);
timeOutForm.addEventListener('change', getTimeInChange);

adForm.addEventListener('submit', (event) => {
  if(!pristine.validate()) {
    pristine.getErrors();
    event.preventDefault();
  }
});

addressForm.readOnly = true;
const getAddressCoordinates = (marker) => {
  const lat = marker.getLatLng().lat.toFixed(COORDINATE_ROUNDING);
  const lng = marker.getLatLng().lng.toFixed(COORDINATE_ROUNDING);
  addressForm.value = `${lat} ${lng}`;
};

getAddressCoordinates(mainPin);

mainPin.on('move', (evt) => {
  getAddressCoordinates(evt.target);
});

const onResetForm = () => {
  adForm.reset();
  filterForm.reset();
  const pricePlaceholder = '1000';
  priceForm.placeholder = pricePlaceholder;
  mainPin.setLatLng(
    DEFAULT_COORDINATE,
  );
  map.setView(
    DEFAULT_COORDINATE,
    ZOOM_MAP);
  getAddressCoordinates(mainPin);
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  onResetForm();
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendOfferForm(() => {
    showSuccessModal();
    onResetForm();
  }, showErrorModal, formData);
});
