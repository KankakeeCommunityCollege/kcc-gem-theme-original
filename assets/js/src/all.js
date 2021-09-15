import '../../scss/kcc-theme.scss';
//import test from './test.js';

function loadModule(...theArgs) {
  const len = theArgs.length;
  let module, defaultFn, path;

  module = theArgs[0];
  len == 2 ? path = theArgs[1] : len == 3 ? path = theArgs[2] : null;
  return import(`${path}${module}.js`).then(({ default: defaultFn }) => defaultFn() );
}

window.addEventListener('load', () => {
  loadModule('wrapPowerText', './').then(() => {
    loadModule('sliders', 'initSliders', './');
  }).then(() => {
    loadModule('footerDate', './');
  }).then(() => {
    loadModule('lazyLoad', './');
  }).then(() => {
    import('./walkText').then(({default: walkText}) => {
      walkText(document.body);
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  loadModule('alerts','./').then(() => {
    loadModule('addClassToOpenNavbar', './');
    return;
  }).then(() => {
    document.getElementById('google_translate_element') ? loadModule('translate', 'watchForMenuClicks', './') : null;
  });
});
