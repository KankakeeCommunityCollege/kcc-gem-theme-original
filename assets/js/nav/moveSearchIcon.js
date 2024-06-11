// This module loads the Google Programmable Search Engine
// then adds some classes to customize it when in use:
//  `.gsc-overrides__clear-x` moves the search button over in order to 
//  make room for the X-icon used to clear-out the search term entered.
// This customization is needed since we add custom styles to change
//  the how the search looks.
// ==================================================================== //

/**
 * 
 * @see {@link https://developer.kcc.edu/docs/gem-theme/site-search/} for our docs on programmable search engine
 * 
 */
function gscInit(resolve) {
  const cx = '006320264078644364913:sy48bet-lr8';
  const gcse = document.createElement('script');
  const s = document.getElementsByTagName('script')[0];
  
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = `https://cse.google.com/cse.js?cx=${cx}`;
  gcse.onload = _e => resolve();
  s.parentNode.insertBefore(gcse, s);
}

function addId(observer, resolve) {
  // The anchor element that holds the X-icon
  const xIcon = document.querySelector('.gsst_a');

  xIcon.id = 'xIcon';
  observer.disconnect();
  resolve()
}

function clearXIcon() {
  const searchButton = document.querySelector('button.gsc-search-button-v2');

  // This class slides the search button left to make room for the X-icon
  searchButton.classList.add('gsc-overrides__clear-x');
}

function unclearXIcon() {
  const searchButton = document.querySelector('button.gsc-search-button-v2');

  searchButton.classList.remove('gsc-overrides__clear-x');
}

function adjustXIcon() {
  const icon = document.getElementById('xIcon');
  const xIsHidden = icon.getAttribute('style') === 'display: none;';

  if (xIsHidden) {
    unclearXIcon();
  } else {
    clearXIcon();
  }
}

function moveSearchIcon() {
  const pageHasGSearch = document.getElementById('searchCollapse');

  if (!pageHasGSearch)
    return;

  // First initialize Google Programmable Search Engine:
  let initSearchPromise = new Promise((resolve, reject) => {
    gscInit(resolve);
  });

  initSearchPromise
    .then(() => {
      // Use mutation observer to see when elements from programmable search are injected in the page
      // then, add an ID to the link around the search's X-icon (X-icon is used to clear any entered search terms)
      return new Promise((resolve, reject) => {
        // Parent element that houses programmable search (once loaded)
        const searchCollapse = document.getElementById('searchCollapse');
        const config = { attributes: true, childList: true, subtree: true };
        const callback = function(mutationsList, observer) {
          for (const mutation of mutationsList) {
            if (mutation.type == 'childList') {
              addId(observer, resolve);
            }
          }
        };
        const observer = new MutationObserver(callback);

        observer.observe(searchCollapse, config);
      });
    })
    .then(() => {
      // The X-icon could be visible already if, for example, we are on the search results page
      // Check the visibility of the X-icon and add the appropriate classes if needed.
      adjustXIcon();
      // Setup another mutation observer to detect when the X-icon becomes visible again.
      const xIcon = document.getElementById('xIcon');
      const config = { attributes: true, childList: true, subtree: true };
      const callback = function(mutationsList, observer) {
          for(const mutation of mutationsList) {
              if (mutation.type == 'attributes') {
                adjustXIcon();
              }
          }
      };
      const observer = new MutationObserver(callback);
      observer.observe(xIcon, config);
    })
}

export default moveSearchIcon;
