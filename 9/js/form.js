import { ROOMS_OPTION, ROOMS_ERRORS, TYPE_OPTINS } from './loading.js';
import { sendOfferForm } from './api.js';

const form = document.querySelector('.ad-form');
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help'
});

const titleField = form.querySelector('#title');
const roomsField = form.querySelector('#room_number');
const capacityField = form.querySelector('#capacity');
const typeField = form.querySelector('#type');
const priceField = form.querySelector('#price');
const timeinField = form.querySelector('#timein');
const timeoutField = form.querySelector('#timeout');

const setOfferFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {

      const formData = new FormData(evt.target);

      sendOfferForm(formData, onSuccess, onFail);

    }
  });
};

const resetButton = document.querySelector('.ad-form__reset');
const setResetButtonClick = (reset) => {
  resetButton.addEventListener('click', reset);
};

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
const validatePrice = () => priceField.value >= TYPE_OPTINS[typeField.value];

const getPriceErrorMessage = () => `Минимальная цена ${TYPE_OPTINS[typeField.value]}`;

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);
const sliderElement = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  connect: 'lower',
  step: 1,
  start: 1000,
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => parseFloat(value),
  }
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

priceField.addEventListener('change', () => {
  sliderElement.noUiSlider.set(priceField.value);
});

typeField.addEventListener('change', () => {
  priceField.placeholder = TYPE_OPTINS[typeField.value];
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: TYPE_OPTINS[typeField.value],
      max: 100000
    }
  });
});

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

const resetForm = () => {
  titleField.value = '';
  typeField.value = 'flat';
  sliderElement.noUiSlider.set(1000);
  priceField.value = '1000';
  roomsField.value = '1';
  capacityField.value = '3';
  timeinField.value = '12:00';
  const featuresForm = form.querySelectorAll('.features__checkbox');

  featuresForm.forEach((elem) => {
    elem.checked = false;
  });
};

export { deactivatePage, activatePage, setOfferFormSubmit, resetForm, setResetButtonClick };
