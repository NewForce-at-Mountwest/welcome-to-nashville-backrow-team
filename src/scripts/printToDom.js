const printResults = (thing1, thing2, i, spanName) => {
  //gather string data
    const resultsHTMLString = resultsBuilder(thing1, thing2, i, spanName);
    // put the resulting HTML string in the DOM
    document.querySelector(".results-box").innerHTML += resultsHTMLString;

}