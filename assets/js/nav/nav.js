import highlightNav from './highlightCurrentNav.js';
import searchToggle from './searchToggleNav.js';
import moveSearchIcon from './moveSearchIcon.js';
// import closeMenuOnClick from './closeNavOnClick.js';
import toggleSearchDropdownOnWindowResize from './toggleNavSearchDropdownOnWindowResize.js';


export default function nav() {
  highlightNav();
  searchToggle();
  moveSearchIcon();
  toggleSearchDropdownOnWindowResize();
}
