/*
// Custom JS | written by https://github.com/wdzajicek
// © 2020 Kankakee Community College
// =================================================== */
// Modules' default function stores our Google Sheet response in sessionStorage to be retrieved later
// Each key gets set to a column in our data
// Each key's value gets set to the corresponding cell in the row below
// ====================================================================
function cacheResponse(response) { // response from Google API's spreadsheet.values.get() method
  const values = response.result.values; // This is where the table's data is in a Sheets response in Sheets API V4
  const [, headerRow, bodyRow] = values; // 1st row = instructions, 2nd row = header row, 3rd row = body row
  
  for (let i = 0, len = bodyRow.length; i < len; i++ ) {
    const cell = bodyRow[i];
    const column = headerRow[i];

    window.sessionStorage.setItem(column.replace(' ', '-'), cell);
  }
  //window.sessionStorage.clear();
}

export default cacheResponse;
