function mobileMenuToogle() {
  let nav = document.querySelector('.main-header');
  let main = document.querySelector('.main-container');
  let toggle = document.querySelector('.main-nav__toogle');
  let scrollLock = document.querySelector('body');
  let paddingBlock1 = document.querySelector('.main-header__wrapper');
  let paddingBlock2 = document.querySelector('.main__wrapper');
  let paddingBlock3 = document.querySelector('.promo__wrapper');

  nav.classList.remove('main-nav--nojs');
  nav.classList.add('main-nav--closed');
  main.classList.remove('main-nav--nojs');

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('main-nav--closed')) {
      nav.classList.remove('main-nav--closed');
      nav.classList.add('main-nav--open');
      scrollLock.classList.add('scroll-lock');
      paddingBlock1.classList.add('mobile-menu-open');
      paddingBlock2.classList.add('mobile-menu-open');
      paddingBlock3.classList.add('mobile-menu-open');

    } else {
      nav.classList.add('main-nav--closed');
      nav.classList.remove('main-nav--open');
      scrollLock.classList.remove('scroll-lock');
      paddingBlock1.classList.remove('mobile-menu-open');
      paddingBlock2.classList.remove('mobile-menu-open');
      paddingBlock3.classList.remove('mobile-menu-open');
    }
  });
}

export {mobileMenuToogle};
