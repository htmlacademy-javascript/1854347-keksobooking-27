import {
  offerToCard
} from './create.js';
import {
  activateAd,
  activateMapFilter
} from './form.js';
import {
  getSimilarOffer
} from './api.js';
import {
  showAlert
} from './show-alert.js';
import {
  resetFilter,
  filterOffers
} from './filter.js';
import {
  debounce
} from './util.js';
import {
  ZOOM_MAP,
  SIMILAR_AD_COUNT,
  DEFAULT_COORDINATE,
} from './const.js';

const L = window.L;

export const PIN_MAIN = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

export const PIN_AD = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const LeafletParameters = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const map = L.map('map-canvas');

const getMap = (cb) => {
  map.on('load', () => {
    cb();
  })
    .setView(
      DEFAULT_COORDINATE,
      ZOOM_MAP);
  L.tileLayer(
    LeafletParameters.TILE_LAYER, {
      attribution: LeafletParameters.ATTRIBUTION,
    },
  ).addTo(map);
};

const mainPin = L.marker(
  DEFAULT_COORDINATE,
  {
    draggable: true,
    icon: PIN_MAIN,
  },
);

mainPin.addTo(map);

const markers = [];

const addPinOnMap = (place) => {
  const marker = L.marker({
    lat: place.location.lat,
    lng: place.location.lng,
  }, {
    icon: PIN_AD,
  });

  marker.addTo(map).bindPopup(offerToCard(place),
    {
      keepInView: true,
    },
  );
  markers.push(marker);
};

const renderPins = (places) => {
  places.slice(0, SIMILAR_AD_COUNT).forEach((place) => {
    addPinOnMap(place);
  });
};

const removePins = () => {
  markers.forEach((marker) => marker.remove());
};

getMap(() => {
  activateAd();
  getSimilarOffer((places) => {
    renderPins(places);
    filterOffers(debounce(() => {
      removePins();
      renderPins(resetFilter(places));
    }));
    activateMapFilter();
  }, (error) => showAlert(error));
});

export {
  getMap,
  mainPin,
  map,
  addPinOnMap,
  renderPins,
  removePins
};
