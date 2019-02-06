const printResults = (thing1, thing2, i) => {
  //gather string data
    const resultsHTMLString = resultsBuilder(thing1, thing2, i);
    // put the resulting HTML string in the DOM
    document.querySelector(".results-box").innerHTML += resultsHTMLString;

}