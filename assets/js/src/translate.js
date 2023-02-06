const GOOGLE_TRANSLATE_ELEMENT = document.getElementById('google_translate_element');
const styleConfigurationObject = {  // Setting all the selectors & the styles they should get.
    'div.VIpgJd-ZVi9od-vH1Gmf *': 'color: #544F4B; font-family: "Roboto", sans-serif; width: 100%;',  // Change font fam and color!
    'span.indicator': 'display: none;',       // Change menu's padding
    'div.VIpgJd-ZVi9od-vH1Gmf': 'overflow-y: scroll; padding: 0px;',  // Change menu's padding
    'div.VIpgJd-ZVi9od-vH1Gmf a div': 'padding: 20px; width: 100%;',  // Change the padding of the languages
    '.goog-te-menu2-item': 'width: 100%;',          // Change the width of the languages
    'td': 'width: 100%; display: block;',           // Change the width of the languages
    'td.VIpgJd-ZVi9od-vH1Gmf-KrhPNb': 'display: none;',
    '.goog-te-menu2-colpad': 'display: none;',      // Change the width of the languages
    'div.VIpgJd-ZVi9od-vH1Gmf': 'border: none;',  // Change Google's default blue border
    'body': 'background-color: #fff; box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);',
  };

function styleIFrameElement(iframe, iframeStyles) {
  const combinedStyles = iframe.style.cssText + iframeStyles;

  iframe.style = combinedStyles;
}

function setStyles(selector, styles, IFRAME_MENU_ELEMENT) {
  const content = IFRAME_MENU_ELEMENT.contentWindow;
  const itemsToStyle = content.document.querySelectorAll(selector);

  [...itemsToStyle].forEach(item => item.style = styles);
}

function translate() {
  const iframeStyles = ' height: 100%; width: 100%; top: 0px; box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);';
  
  GOOGLE_TRANSLATE_ELEMENT.addEventListener('click', (e) => {
    const IFRAME_MENU_ELEMENT = document.querySelector('iframe[title="Language Translate Widget"]');

    // Use this log to find translate menu elements:
    // console.log(IFRAME_MENU_ELEMENT.contentWindow.document.body);

    // Target the anchor elements in the translate menu (language options)
    const anchors = IFRAME_MENU_ELEMENT.contentWindow.document.body.querySelectorAll('.VIpgJd-ZVi9od-vH1Gmf a');
    // Color the menu text white when an element is hovered:
    [...anchors].forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (el.querySelector('span.text').innerHTML !== 'Select Language') {
          el.querySelector('span.text').style = 'color: #fff;';
        }
      })
      el.addEventListener('mouseleave', () => {
        if (el.querySelector('span.text').innerHTML !== 'Select Language') {
          el.querySelector('span.text').style = 'color: #544F4B;';
        }
      })
    });

    styleIFrameElement(IFRAME_MENU_ELEMENT, iframeStyles);

    Object.keys(styleConfigurationObject).forEach(selector => {
      setStyles(selector, styleConfigurationObject[selector], IFRAME_MENU_ELEMENT);
    });

  }, false);
}

export default translate;
