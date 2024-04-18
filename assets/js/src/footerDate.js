// Update copyright year if its not current
const yearSpan = document.getElementById('currentYear');

function footerDate() {
  const d = new Date();
  const fullYear = d.getFullYear();

  if (yearSpan.innerHTML === `${fullYear}`)
    return;

  yearSpan.innerHTML = fullYear;
}
export default footerDate;
