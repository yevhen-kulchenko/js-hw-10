import menuTemplate from '../templates/menu.hbs';
import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');
const markup = menuTemplate(menu);

menuListRef.insertAdjacentHTML('afterbegin', markup);
