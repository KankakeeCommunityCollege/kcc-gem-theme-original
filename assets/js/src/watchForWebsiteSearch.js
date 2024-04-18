const form = document.getElementById('SearchTermForm');
const searchURL = 'https://www.kcc.edu/search';

function submissionHandler(e) {
  const target = e.target;
  const searchString = encodeURIComponent(target.querySelector('#searchTermInput').value); // user enter search term into input element
  // Google Custom Search can be triggered using a query string on the search page e.g. `?q=my-search`
  const searchQuery = `?q=${searchString}`;

  e.preventDefault();
  return window.location = new URL(searchURL + searchQuery);
}

function watchForWebsiteSearch() {
  form.addEventListener('submit', submissionHandler);
}

export default watchForWebsiteSearch;
