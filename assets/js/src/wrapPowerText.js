const SLIDE_HEADING_ELEMENTS = document.querySelectorAll('.hero-slider__slider--slide-heading'); // Element from HTML
const regEx = /\*\*(\S+)\*\*/g;
const replacement = '<span class="typography__power-text">$1</span>';

function wrapPowerText() {
  [...SLIDE_HEADING_ELEMENTS].forEach(heading => {
    heading.innerHTML = heading.innerHTML.replace(regEx, replacement);
  })
}

export default wrapPowerText;
