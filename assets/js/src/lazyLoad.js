// Lazy load images
// ex. <img src="/path/to/small-placeholder_image.png" data-src="/path/to/actual_image.jpg" alt="You better not leave it blank">
function lazyLoad() {
  const lazyLoadImages = document.querySelectorAll('img[data-src]');

  [...lazyLoadImages].forEach(img => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });
}
export default lazyLoad;
