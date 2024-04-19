/*
// Custom JS | written by https://github.com/wdzajicek
// © 2020 Kankakee Community College
// =================================================== */
import createAlertsHtml from './createAlertsHtml';
import checkForPrefersReducedMotion from './checkForPrefersReducedMotion';

const sheetKey = '1plXBiZY5pVbhNT-mszxEuqCl4zy8wMnz9gXXbbT_yLs'; // Corresponds to the ID of the Google Sheet
const sheetTab = 'Alerts'; // Corresponds to the tab of workbook: either  'Alerts' or 'Alerts Testing' unless you make a new one.
// const devSheetTab = 'ALERTS_TESTING';
const emergencyAlertsDiv = 'emergencyAlerts'
const sheetParams = {
  spreadsheetId: sheetKey,
  range: sheetTab
  // range: devSheetTab
};  // Configures the Object used for `sheets.spreadsheets.values.get()` parameters
const apiParams = { // This is configuration for API call with spreadsheets that are setup as readonly
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const pageHasAccordionOrTabs = (document.querySelector('#accordion') || document.querySelector('.navTabs')) ? true : false;

async function loadModule(module) {
  const { default: module_func } = await import(`./${module}`);

  return module_func();
}

export default function alerts(Collapse) {
  checkForPrefersReducedMotion();

  if (!document.getElementById(emergencyAlertsDiv)) {
    if (pageHasAccordionOrTabs) {
      return import('./contentHashLink').then(({default: contentHashLink}) => contentHashLink(Collapse));
    }
  }

  new Promise((resolve, reject) => { // First build the alert, whether by cache or API call
    gapi.load('client', () => {
      gapi.client.init(apiParams).then(() => {
        return gapi.client.sheets.spreadsheets.values.get(sheetParams);
      }).then(response => {
        createAlertsHtml(response) // Promise is resolved after HTML alert is built
        resolve();
      }, err => {
        console.error("Error trying to fetch the alert from gapi:", err);
      })
    });

  }).then(() => {
    window.setTimeout(() => {
      if (pageHasAccordionOrTabs) {
        import('./contentHashLink').then(({default: contentHashLink}) => contentHashLink(Collapse));
      }
    }, 100)
  }) // Run accordion/tab JS, which includes a `scrollTo()`, after alert has painted
}
