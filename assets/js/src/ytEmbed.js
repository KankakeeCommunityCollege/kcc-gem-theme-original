const ytEmbedParent = document.getElementById('yt-embed');
const videoId = ytEmbedParent.dataset.video;
//<iframe width="560" height="315" src="https://www.youtube.com/embed/LUCrx9chw-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

function setAttributes(el, arg, argVal) {
  const argumentIsString = typeof arg == 'string';

  if ( argumentIsString ) {
    el.setAttribute(arg, argVal)
  } else {
    for (let i = 0, len = arg.length; i < len; i++) {
      el.setAttribute(arg[i], argVal[i])
    }
  }
  return el;
}

function ytEmbed() {
  const iframe = document.createElement('iframe');

  setAttributes(iframe, ['width', 'height', 'frameborder', 'allow', 'allowfullscreen'], ['560', '315', '0', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', '']);
  ytEmbedParent.appendChild(iframe);
  setAttributes(iframe, 'src', 'https://www.youtube.com/embed/' + videoId + '?showinfo=0&rel=0');
  iframe.onload = () => {
    ytEmbedParent.removeChild(ytEmbedParent.querySelector('.yt-embed'));
  }

}

export default ytEmbed;
