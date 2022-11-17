import { creatArrElements } from './card.js';
import { offerToCard } from './map.js';

const offers = creatArrElements();
const cards = offers.map(offerToCard);

const blockMap = document.querySelector('#map-canvas');
blockMap.append(cards[0]);
