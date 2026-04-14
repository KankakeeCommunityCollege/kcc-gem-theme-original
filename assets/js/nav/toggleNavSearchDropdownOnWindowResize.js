// Custom JS to Close the Navigation menu, if its open, & if the screen goes above 992px wide (Bootstrap 4 'lg' devices)
const searchCollapse = document.getElementById('searchCollapse');
const globalNav = document.getElementById('globalNav');
const localNav = document.getElementById('mainNav');
const searchIcon = document.getElementById('searchIcon');

const collapsedNavMql = window.matchMedia('(min-width: 992px)');

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

function checkViewportWidth(e) {
  if (e.matches) {
    // Fire "expanded" logic here
    checkElementCollapseState(searchCollapse, searchCollapseVisibleClass);
    checkElementCollapseState(globalNav, globalNavSearchVisibleClass);
    checkElementCollapseState(localNav, localNavSearchVisibleClass);
    checkSearchToggleIcon(searchIcon);

    searchCollapse.setAttribute('aria-hidden', 'false');
    searchCollapse.removeAttribute('hidden');
  } else {
    searchCollapse.setAttribute('aria-hidden', 'true');
    searchCollapse.setAttribute('hidden', ''); // Make sure the aria-hidden element and children are not focusable.
  }
}

function toggleSearchDropdownOnWindowResize() {
  checkViewportWidth(collapsedNavMql);
  collapsedNavMql.addEventListener('change', checkViewportWidth);
}

export default toggleSearchDropdownOnWindowResize;
