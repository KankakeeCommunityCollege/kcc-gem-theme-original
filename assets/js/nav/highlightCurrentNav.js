// Custom Vanilla JS to highlight the user's current location in the navigation bar and the sub-nav navigation bar
function setActive(link) {
  const li = link.parentNode;

  li.classList.add('active');
  link.insertAdjacentHTML('beforeend', ' <span class="visually-hidden">(current)</span>');
}

function checkNavLinks(navList) {
  const pathname = window.location.pathname;
  const locationIsContactHash = window.location.hash === '#contact';
  const locationIsHome = window.location.pathname === '/';

  [...navList].forEach(item => {
    const link = item.querySelector('a');
    const href = link.getAttribute('href').replace(/^\/?\.\.\/(\.\.\/)?(\.\.\/)?/g, '/');
    const linkIsHome = link.textContent.toLowerCase() === 'home';
    const linkIsMatch = (pathname.indexOf(href) !== -1);

    if (locationIsHome || locationIsContactHash) {
      if (linkIsHome) {
        setActive(link);
      }
    } else {
      if (linkIsMatch && !linkIsHome) {
        setActive(link);
      }
    }
  });
}

function highlightNav() {
  const navList = document.querySelectorAll('.js-nav-item');

  if (document.getElementById('subNavNav')) {
    const subNavList = document.querySelectorAll('.js-sub-nav-item');

    checkNavLinks(subNavList);
  }

  checkNavLinks(navList);
}

export default highlightNav;
