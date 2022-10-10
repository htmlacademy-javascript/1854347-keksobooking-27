function getRandomInteger (min, max) {
  if (isFinite(min) && isFinite(max)) {
    let a = Math.min(Math.abs(min), Math.abs(max));
    let b = Math.max(Math.abs(min), Math.abs(max));
    return Math.trunc(Math.random() * (b - a)) + a;
      } return 'НЕ число'
}

function getCordinatePoint (min, max, comma=1) {
  if (isFinite(min) && isFinite(max) && isFinite(comma)) {
    let a = Math.min(Math.abs(min), Math.abs(max));
    let b = Math.max(Math.abs(min), Math.abs(max));
    let num =Math.random() * (b - a) + a;
    return num.toFixed(Math.abs(comma));
      } else {
        return 'Не число!!';
      }
}
