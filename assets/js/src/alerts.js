/*
// Custom JS | written by https://github.com/wdzajicek
// © 2020 Kankakee Community College
// =================================================== */
import start from './campusAlertsSheetsAPI.js';
import getCachedResponse from './getCachedResponse.js';
import checkForPrefersReducedMotion from './checkForPrefersReducedMotion.js';

function alerts(Collapse) {
  checkForPrefersReducedMotion();

  // Checks if our cached alert is already in sessionStorage
  if (window.sessionStorage.getItem('Alert-Content')) {
    // If not, build the alert from a new Google API response
    gapi.load('client', () => {
      start(Collapse);
    });
  } else {
    // Otherwise, build the alert from our cached response
    getCachedResponse(Collapse);
  }
}

export default alerts;
