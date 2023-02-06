import '../../scss/kcc-theme.scss'; // Import scss file into webpack main entry-point for webpack compiled css
//import test from './test.js';

// function loadModule(...theArgs) {
//   const len = theArgs.length;
//   let module, defaultFn, path;

//   module = theArgs[0];
//   len == 2 ? path = theArgs[1] : len == 3 ? path = theArgs[2] : null;
//   len == 2 ? defaultFn = module : defaultFn = theArgs[1];
//   return import(`${path}${module}.js`).then(({ default: defaultFn }) => defaultFn() );
// }

window.addEventListener('load', () => {

  import('./alerts').then(({ default: alerts }) => alerts());

  import('./addClassToOpenNavbar').then(({ default: addClassToOpenNavbar }) => addClassToOpenNavbar());

  import('../nav/nav').then(({ default: nav }) => nav());

  if (document.getElementById('google_translate_element')) {
    import('../../scss/translate.scss').then(() => {
      import('./translate').then(({ default: translate }) => translate());
    })
  }

  if (document.querySelector('.hero-slider__slider')) {
    import('./wrapPowerText')
      .then(({ default: wrapPowerText }) => wrapPowerText())
      .then(() => {
        import('./sliders').then(({ default: initSliders }) => initSliders())
      })
  }

  if (document.querySelector('img[data-src]')) {
    import('./lazyLoad').then(({ default: lazyLoad }) => lazyLoad());
  }

  if (document.getElementById('currentYear')) {
    import('./footerDate')
      .then(({ default: footerDate }) => footerDate());
  }

  import('./walkText').then(({default: walkText}) => walkText(document.body));

  // loadModule('alerts','./').then(() => { // Get the campus alerts message & build it out
  //   loadModule('addClassToOpenNavbar', './');
  //   return;
  // }).then(() => {
  //   if (document.getElementById('google_translate_element')) { // Check for elements used with Google Translate
  //     import('../../scss/translate.scss').then(() => { // Load custom styling for Google Translate conditionally
  //       loadModule('translate', 'watchForMenuClicks', './'); // Then load the custom translate JS for functionality
  //     });
  //   }
  // }).then(() => {
  //   import('../nav/nav/nav').then(({ default: nav }) => nav()); // JS for custom navbar functionality
  // });

  // loadModule('wrapPowerText', './').then(() => {
  //   return loadModule('sliders', 'initSliders', './');
  // }).then(() => {
  //   if (document.querySelector('img[data-src]')) {
  //     return loadModule('lazyLoad', './');
  //   }
  // }).then(() => {
  //   return loadModule('footerDate', './');
  // }).then(() => {
  //   import('./walkText').then(({default: walkText}) => {
  //     walkText(document.body); // walkText() needs an argument
  //   });
  // });
  
});
