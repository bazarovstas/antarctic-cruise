import {selectArray} from '../utils/selector';

const {body} = document;
const [header, main, footer] = selectArray([
  'header',
  'main-container',
  'main-footer'
], body);

const [overlay, toggler] = selectArray(['header__overlay', 'header__toggle'], header);

const closeMenu = () => toggleMenu(false);

function closeMenuOnEsc(evt) {
  if (evt.key === 'Escape') {
    closeMenu();
  }
}

const handlerToggleClick = () =>
  toggleMenu(toggler.getAttribute('aria-expanded') === 'false');

function toggleMenu(willBeOpened = false) {
  body.classList.toggle('scroll-lock', willBeOpened);
  header.classList.toggle('header--open', willBeOpened);

  toggler.setAttribute(
      'aria-label',
      `${willBeOpened ? 'Закрыть' : 'Открыть'} мобильное меню.`
  );
  inertOtherContent(willBeOpened);

  toggler.setAttribute('aria-expanded', String(willBeOpened));

  if (willBeOpened) {
    document.addEventListener('keydown', closeMenuOnEsc);
  } else {
    document.removeEventListener('keydown', closeMenuOnEsc);
  }
}

function inertOtherContent(willBeInert = false) {
  if (main && footer) {
    main.inert = willBeInert;
    footer.inert = willBeInert;
  }
}

export function initMobileMenu() {
  if (header) {
    header.classList.remove('header--no-js');
  }

  if (overlay && toggler) {
    toggler.addEventListener('click', handlerToggleClick);
    overlay.addEventListener('click', closeMenu);
  }
}
