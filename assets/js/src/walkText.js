// Replace all occurences of "--" (double-hyphens,) within the page's text-nodes, with em-dashes.
// Use a replacer function to omit any occurences of triple-hyphens which appear in our documentation.
// For example, YAML Front - matter's opening and closing triple-hyphens
// Without the replacer funciton, triple-hyphens get replaced with an em-dash and a hyphen.
const emDashOrTripleHyphensRegex = /\\?---?/g;
const tripleHyphenRegex = /---/;
const emDash = '—' // This is an em-dash, however, it looks like a hyphen in monospace text editor font!

// Without the replacer function, triple-hyphens get replaced with an em-dash and a hyphen.
function replacerFunction(match) {
  return match.search(tripleHyphenRegex) === -1 ? emDash : match;
}

function walkText(root) {
  let currentNode;
  const nodeIterator = document.createNodeIterator(
    root,
    NodeFilter.SHOW_TEXT,
    (node) => (node.nodeValue.search(emDashOrTripleHyphensRegex) !== -1) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
  );

  while (currentNode = nodeIterator.nextNode()) {
    currentNode.data = currentNode.data.replace(emDashOrTripleHyphensRegex, replacerFunction);
  }
}
//  Note on usage: You don't need to necessarily traverse the entire document.body. 
//  Usage:
//
//    walkText(document.body);
//
export default walkText;
