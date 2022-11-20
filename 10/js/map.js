import { DEFAULT_COORDINATE, ELEMENT_COUNT } from './const.js';
import {offerToCard} from './create.js';
import { deactivatePage, activatePage } from './form.js';

deactivatePage();

const mapCoorToText = (coor) => `${coor.lat.toFixed(5)}, ${coor.lng.toFixed(5)}`;

const addressField = document.querySelector('#address');
addressField.value = mapCoorToText(DEFAULT_COORDINATE);

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView(DEFAULT_COORDINATE, 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const mainIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(DEFAULT_COORDINATE, {
  draggable: true,
  icon: mainIcon,
});

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const address = evt.target.getLatLng();
  addressField.value = mapCoorToText(address);
});


const markerGroup = L.layerGroup().addTo(map);
const renderSimilarOffers = (offers) => {
  markerGroup.clearLayers();
  const regularIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  offers.slice(0, ELEMENT_COUNT)
    .forEach((offer) => {
      const { location: { lat, lng } } = offer;
      const marker = L.marker(
        {
          lat,
          lng,
        },
        {
          icon: regularIcon
        }
      );
      marker
        .addTo(markerGroup)
        .bindPopup(offerToCard(offer));
    });
};

const resetMainMark = () => mainMarker.setLatLng(DEFAULT_COORDINATE);

export { resetMainMark, renderSimilarOffers };