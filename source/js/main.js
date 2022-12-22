import {initMobileMenu} from './modules/init-mobile-menu';
import {enableGoogleMap} from './modules/map';
import {addNoWebpClasses} from './modules/webp';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  // enableGoogleMap();
  addNoWebpClasses();

  document.documentElement.style.setProperty('--scrollbarWidth',
      `${window.innerWidth - document.body.clientWidth}px`);
});
