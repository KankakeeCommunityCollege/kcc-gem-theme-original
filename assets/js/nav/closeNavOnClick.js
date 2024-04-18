const navLinks = '.nav-link:not(.dropdown-toggle)';  // Bootstrap 4 class

function hideBootstrapMenu(menu, Collapse) {
  const bsCollapse = new Collapse(menu, { toggle: false });

  bsCollapse.hide();
}

function closeMenuOnClick(Collapse) {
  document.addEventListener('click', e => {
    if ( !e.target.matches(navLinks) || e.target.classList.contains('dropdown-toggle') )  // Bail out of the rest of the code if the click event's target is not what we want!
      return;

    const menu = document.getElementById('mainNavContent');

    if (menu.classList.contains('show')) {
      hideBootstrapMenu(menu, Collapse);
    }
  });
}

export default closeMenuOnClick;
