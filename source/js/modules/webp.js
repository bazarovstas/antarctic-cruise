import supportsWebP from 'supports-webp';
import {addBEMModifiers} from '../utils/bem';

const BLOCKS_WITH_BG = ['main', 'advantages', 'booking', 'map__no-js-container'];

export function addNoWebpClasses() {
  supportsWebP.then((supported) => {
    if (!supported) {
      for (const className of BLOCKS_WITH_BG) {
        const element = document.querySelector(`.${className}`);

        if (element) {
          addBEMModifiers(element, 'no-webp');
        }
      }
    }
  });
}
