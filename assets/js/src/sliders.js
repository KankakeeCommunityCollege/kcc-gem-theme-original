// Custom JS to initialize slick slider (https://github.com/kenwheeler/slick) and then build a play/pause toggle button
// Uses slick-specific methods & slick events. See slick events at: https://github.com/kenwheeler/slick/#events
const heroSliderClassName = '.hero-slider__slider';  // Our classname for the hero-slider's DOM parent
const SLICK_PLAY = 'slickPlay';  // Methods unique to slick
const SLICK_PAUSE = 'slickPause';  // Methods unique to slick
const SLICK_NEXT_SLIDE = 'slickNext';  // Methods unique to slick
const play = 'Play';
const pause = 'Pause';

function setAttributeOnEl(el, attr, value) {
  return el.setAttribute(attr, value);
}

function toggleSlickPlayState(el, slickState, newButtonText) {
  const newButtonTextIsPause = newButtonText === pause;

  $(heroSliderClassName).slick(slickState);
  setAttributeOnEl(el, 'aria-label', newButtonText);
  el.classList.toggle('hero-slider__button--play');
  el.innerHTML = newButtonText;

  if (newButtonTextIsPause) {
    $(heroSliderClassName).slick(SLICK_NEXT_SLIDE);
  }
}

function createButton(parent) {
  const button = document.createElement('button');

  button.setAttribute('role', 'button');
  button.setAttribute('type', 'button');
  button.setAttribute('aria-label', 'Pause');
  button.setAttribute('style', 'display: block;')
  button.innerHTML = 'Pause';
  button.classList.add('hero-slider__button--toggle');
  parent.appendChild(button);
  return button;
}

function addButton() {
  const slickParent = document.querySelector(heroSliderClassName);
  const button = createButton(slickParent);

  button.addEventListener('click', _e => {
    const buttonTextIsPause = button.innerHTML === 'Pause';

    if (buttonTextIsPause) {
      toggleSlickPlayState(button, SLICK_PAUSE, play);
    } else {
      toggleSlickPlayState(button, SLICK_PLAY, pause);
    }
  });
}

function initSliders() {
  // slick's on 'init' function (See events in slick docs):
  $(heroSliderClassName).on('init', function(event, slick){ // According to slick doc's; you have to call a $(slick).on('init', function(){ //... }); before you initialize slick
    addButton();
  });
  // Initializing slick after the above `.on('init', function() {})`
  $(heroSliderClassName).slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',  // TODO: change to <button> el
    nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>'  // TODO: change to <button> el
  });
}

export default initSliders;
