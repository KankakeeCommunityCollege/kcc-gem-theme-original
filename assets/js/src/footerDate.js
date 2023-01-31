// Update copyright year if its not current
const YEAR_SPAN = document.getElementById('currentYear');

function footerDate() {
  const d = new Date();
  const fullYear = d.getFullYear();

  if (YEAR_SPAN.innerHTML === `${fullYear}`)
    return;

  YEAR_SPAN.innerHTML = fullYear;
}
export default footerDate;
