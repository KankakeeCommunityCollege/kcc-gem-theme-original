// Custom Vanilla JS to highlight the user's current location in the navigation bar and the sub-nav navigation bar
function setActive(link, ariaCurrentValue) {
  const li = link.parentNode;

  li.classList.add('active');
  // link.insertAdjacentHTML('beforeend', ' <span class="visually-hidden">(current)</span>');
  link.setAttribute('aria-current', ariaCurrentValue);
}

function checkNavLinks(navList, isSubNav) {
  const pathname = window.location.pathname;
  const locationIsContactHash = window.location.hash === '#contact';
  const locationIsHome = window.location.pathname === '/';
  const ariaCurrentValue = (isSubNav) ? 'page' : 'true';

  [...navList].forEach(item => {
    const link = item.querySelector('a');
    const href = link.getAttribute('href').replace(/^\/?\.\.\/(\.\.\/)?(\.\.\/)?/g, '/');
    const linkIsHome = link.textContent.toLowerCase() === 'home';
    const linkIsMatch = (pathname.indexOf(href) !== -1);

    if (locationIsHome || locationIsContactHash) {
      if (linkIsHome) {
        setActive(link, ariaCurrentValue);
      }
    } else {
      if (linkIsMatch && !linkIsHome) {
        setActive(link, ariaCurrentValue);
      }
    }
  });
}

function highlightNav() {
  const navList = document.querySelectorAll('.js-nav-item');

  if (document.getElementById('subNavNav')) {
    const subNavList = document.querySelectorAll('.js-sub-nav-item');

    checkNavLinks(subNavList, true);
  }

  checkNavLinks(navList, false);
}

export default highlightNav;
