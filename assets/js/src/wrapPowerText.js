const slideHeadingList = document.querySelectorAll('.hero-slider__slider--slide-heading'); // Element from HTML
const regEx = /\*\*([^\*]+)\*\*/g;
const replacement = '<span class="typography__power-text">$1</span>';

function wrapPowerText() {
  [...slideHeadingList].forEach(heading => {
    heading.innerHTML = heading.innerHTML.replace(regEx, replacement);
  })
}

export default wrapPowerText;
