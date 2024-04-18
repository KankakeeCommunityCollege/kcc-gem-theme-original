/*
// Custom JS | written by https://github.com/wdzajicek
// © 2020 Kankakee Community College
// =================================================== */
// JS module to build alert message using data from Google Sheets API v4
//
// This exported module requires you pass it's default-function the `response` object from the API call, as the only argument
import contentHashLink from './contentHashLink.js';
import parseMarkdownToHTML from './parseMarkdownToHTML.js'; // Parses a simplified markdown into html & creates the paragraph el's with appropriate class

function injectAlert(target, alert) {
  target.innerHTML = alert;
  return target.classList.add('position__offset-alert--visible');
}

function createAlertsHtml(response, Collapse) {  // Incoming response from our Google Sheet via the Sheets API
  // This is where the cell values hide in the response object from the Google API.

  let [visibility, allPages, content, expire, start, end] = response.result.values[2];  // The 3rd row has our table's data
  if (visibility === 'FALSE') return contentHashLink(Collapse); // Predefined dropdown options in the Sheet are `'TRUE'` & `'FALSE'`

  const alertDiv = document.getElementById('emergencyAlerts'); // This targets an element built into the DOM that we inject everything into.
  let d = new Date;
  let s = new Date(start);
  let e = new Date(end);
  const alertIsActive = expire === 'FALSE' || expire === 'TRUE' && s.getTime() <= d.getTime() && e.getTime() > d.getTime();
  const indexPageOnly = allPages === 'TRUE' || allPages === 'FALSE' && window.location.pathname == '/';
  let alert = `
<div class="container">
  <div class="row">
    <div class="col">
      <div class="alert alert-warning">
        ${parseMarkdownToHTML(content)}
        </div>
    </div>
  </div>
</div>`;

  [d,s,e].map(d => d.setHours(0, 0, 0, 0));
  if (alertIsActive && indexPageOnly) {
    injectAlert(alertDiv, alert);
  }
  return contentHashLink(Collapse);
}

export default createAlertsHtml;
