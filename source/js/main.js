import {initMobileMenu} from './modules/init-mobile-menu';
import {enableGoogleMap} from './modules/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  enableGoogleMap();


  document.documentElement.style.setProperty('--scrollbarWidth',
      `${window.innerWidth - document.body.clientWidth}px`);
});

