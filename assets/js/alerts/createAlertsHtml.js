/*
// Custom JS | written by https://github.com/wdzajicek
// © 2020 Kankakee Community College
// =================================================== */
// JS module to build alert message using data from Google Sheets API v4
//
// This exported module requires you pass it's default-function the `response` object from the API call, as the only argument
//
import parseMarkdownToHTML from './parseMarkdownToHTML.js'; // Parses a simplified markdown into html & creates the paragraph el's with appropriate class
//
const alertDiv = document.getElementById('emergencyAlerts'); // This targets an element built into the DOM that we inject everything into.

function injectAlert(target, alert) {
  target.innerHTML = alert;
  return target.classList.add('position__offset-alert--visible');
}

function checkAlertType(type) {
  return type == 'SCHOOL EMERGENCY/CLOSURE - red' ? 'danger'
  : type == 'SCHOOL INFO - blue' ? 'primary'
  : type == 'SCHOOL INFO - cyan' ? 'info'
  : 'warning';
}

function createAlertsHtml(response) {  // Incoming response from our Google Sheet via the Sheets API
  let [visibility, allPages, content, expire, start, end, type] = response.result.values[2];  // The 3rd row has our table's data
  if (visibility === 'FALSE') // Predefined dropdown options in the Sheet are `'TRUE'` & `'FALSE'`
    return;

  const d = new Date;
  const s = new Date(start);
  const e = new Date(end);
  const alertType = checkAlertType(type);
  const alertIsActive = expire === 'FALSE' || expire === 'TRUE' && s.getTime() <= d.getTime() && e.getTime() > d.getTime();
  const indexPageOnly = allPages === 'TRUE' || allPages === 'FALSE' && window.location.pathname == '/';
  let alert = `
<div class="container">
  <div class="row">
    <div class="col">
      <div role="alert" class="alert alert-${alertType} d-lg-flex align-items-center">
        <div class="typography__last-p--mb0">
          ${parseMarkdownToHTML(content)}
        </div>
      </div>
    </div>
  </div>
</div>`;

  [d,s,e].map(d => d.setHours(0, 0, 0, 0));
  return alertIsActive && indexPageOnly ? injectAlert(alertDiv, alert) : null;
}

export default createAlertsHtml;
