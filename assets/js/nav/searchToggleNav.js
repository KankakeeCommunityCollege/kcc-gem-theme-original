// Custom JS to toggle the search form on mobile devices
const mainNav = document.getElementById('mainNav');
const globalNav = document.getElementById('globalNav');

function switchToX(icon, button) {
  icon.style.backgroundImage = 'url("/assets/img/x.svg")';
  icon.setAttribute('alt', 'Close icon');
  button.setAttribute('aria-label', 'Close search');
}

function switchToSearch(icon, button) {
  icon.style.backgroundImage = 'url("/assets/img/search.svg")';
  icon.setAttribute('alt', 'Search icon');
  button.setAttribute('aria-label', 'Open search');
}

function searchToggle() {
  if (!document.getElementById('searchIcon'))
    return;

  const searchButton = document.getElementById('searchIcon');

  document.addEventListener('click', function (e) {
    // If the clicked element doesn't have the right selector, bail
    if (!e.target.closest('#searchIcon')) return;
    // Don't follow the link
    e.preventDefault();

    const searchIconElement = document.getElementById('searchImg');
    const searchCollapse = document.getElementById('searchCollapse');
    const searchIconBackgroundImage = searchIconElement.style.backgroundImage;
    const iconIsSearch = (searchIconBackgroundImage.indexOf('assets/img/search.svg') != -1);

    if (iconIsSearch) {
      switchToX(searchIconElement, searchButton);
      searchCollapse.setAttribute('aria-hidden', 'false');
    } else {
      switchToSearch(searchIconElement, searchButton);
      searchCollapse.setAttribute('aria-hidden', 'true');
    }
    searchCollapse.classList.toggle('nav-global__search-collapse--visible');
    mainNav.classList.toggle('nav-local__search-toggle');
    globalNav.classList.toggle('nav-global__search-toggle');
  }, false);
}
export default searchToggle;
