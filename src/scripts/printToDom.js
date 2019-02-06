const printResults = (location,) => {
  //gather string data
    const resultsHTMLString = resultsBuilder();
    // put the resulting HTML string in the DOM
    document.querySelector(`${location}`).innerHTML += resultsHTMLString;

}