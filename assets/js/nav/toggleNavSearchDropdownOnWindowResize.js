// Custom JS to Close the Navigation menu, if its open, & if the screen goes above 992px wide (Bootstrap 4 'lg' devices)
const searchCollapseVisibleClass = 'nav-global__search-collapse--visible'; // Class in the HTML when the search collapse is open/visible
const globalNavSearchVisibleClass = 'nav-global__search-toggle';
const localNavSearchVisibleClass = 'nav-local__search-toggle';

function removeClassFromElement(el, classToRemove) {
  el.classList.remove(classToRemove);
}

function checkElementCollapseState(el, classToCheckFor) {
  if ( ! el.classList.contains(classToCheckFor) )
    return;

  removeClassFromElement(el, classToCheckFor);
}

function toggleSearchIconToX(searchIcon) {
  const searchSpan = searchIcon.querySelector('#searchImg');

  searchIcon.setAttribute('aria-label', 'Toggle Search');
  searchSpan.setAttribute('alt', 'Open icon');
  searchSpan.setAttribute('style', 'background-image: url("/assets/img/search.svg")');
}

function checkSearchToggleIcon(searchIcon) {
  let ariaLabel = searchIcon.getAttribute('aria-label');

  if ( ! ariaLabel === 'Toggle Close' )
    return;

  toggleSearchIconToX(searchIcon);
}

function windowResizeHandler() {
  if ( window.innerWidth >= 992 ) {
    const searchCollapseElement = document.getElementById('searchCollapse');
    const globalNav = document.getElementById('globalNav');
    const localNav = document.getElementById('mainNav');
    const searchIcon = document.getElementById('searchIcon');

    checkElementCollapseState(searchCollapseElement, searchCollapseVisibleClass);
    checkElementCollapseState(globalNav, globalNavSearchVisibleClass);
    checkElementCollapseState(localNav, localNavSearchVisibleClass);
    checkSearchToggleIcon(searchIcon);
  }
}

function toggleSearchDropdownOnWindowResize() {
  window.addEventListener('resize', windowResizeHandler);
}

export default toggleSearchDropdownOnWindowResize;
