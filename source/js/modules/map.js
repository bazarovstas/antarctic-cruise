function enableGoogleMap() {
  const map = document.querySelector('.map__container');
  const noJSContainer = map.querySelector('.map__no-js-container');

  noJSContainer.remove();
  map.classList.remove('map__no-js');
  map.classList.add('map__js');
}

export {enableGoogleMap};
