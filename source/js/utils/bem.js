/**
 * @param {Element} element
 * @param {string} mod BEM mod
 */

export function addBEMModifiers(element, mod) {
  if (element.classList.length) {
    const [className] = element.classList;
    element.classList.add(`${className}--${mod}`);
  }
}
