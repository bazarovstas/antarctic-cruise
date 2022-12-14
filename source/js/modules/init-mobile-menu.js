const {body} = document;

const [nav, main, toggle, headerWrapper, mainWrapper, promoWrapper, mainNav]
  = [
    '.main-header',
    '.main-container',
    '.main-nav__toggle',
    '.main-header',
    '.main',
    '.promo',
    '.main-nav__list'
  ].map((cssQuery) => body.querySelector(cssQuery));

function toggleMenu() {
  nav.classList.toggle('main-nav--closed');
  nav.classList.toggle('main-nav--open');
  body.classList.toggle('scroll-lock');
  headerWrapper.classList.toggle('mobile-menu-open');
  mainWrapper.classList.toggle('mobile-menu-open');
  promoWrapper.classList.toggle('mobile-menu-open');

  let ariaLabel = toggle.getAttribute('aria-label');
  if (ariaLabel === 'Открыть мобильное меню.') {
    toggle.setAttribute('aria-label', 'Закрыть мобильное меню.');
  } else {
    toggle.setAttribute('aria-label', 'Открыть мобильное меню.');
  }
}

export function initMobileMenu() {
  if (nav && main && toggle && headerWrapper && mainWrapper && promoWrapper && mainNav) {
    nav.classList.remove('main-nav--nojs');
    nav.classList.add('main-nav--closed');
    main.classList.remove('main-nav--nojs');

    toggle.addEventListener('click', toggleMenu);

    mainNav.addEventListener('click', ({target}) => {
      if (window.innerWidth <= 767 && target.href) {
        toggleMenu();
      }
    });
  }
}
