function getRandomInteger (min, max) {
  if (isFinite(min) && isFinite(max)) {
    const a = Math.min(Math.abs(min), Math.abs(max));
    const b = Math.max(Math.abs(min), Math.abs(max));
    return Math.trunc(Math.random() * (b - a)) + a;
  } else {return 'НЕ число';}
}

function getCordinatePoint (min, max, comma = 1) {
  if (isFinite(min) && isFinite(max) && isFinite(comma)) {
    const a = Math.min(Math.abs(min), Math.abs(max));
    const b = Math.max(Math.abs(min), Math.abs(max));
    const num = Math.random() * (b - a) + a;
    return num.toFixed(Math.abs(comma));
  } else {
    return 'Не число!!';
  }
}

getRandomInteger(1, 100);
getCordinatePoint(1, 2000, 2);
