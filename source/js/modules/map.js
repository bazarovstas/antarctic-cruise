function enableGoogleMap() {
  let map = document.querySelector('.map__container');

  map.classList.remove('map__no-js');
  map.classList.add('map__js');
}

export {enableGoogleMap};
