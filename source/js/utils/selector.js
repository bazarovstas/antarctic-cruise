/**
 * @param {string[]} classes
 * @param {Element | Document} parent
 */

export const selectArray = (classes, parent = document) => classes.map(
    (cssQuery) => parent.querySelector(`.${cssQuery}`)
);
