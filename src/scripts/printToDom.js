const printResults = (thing1, thing2, i, spanName) => {
  //gather string data
    const resultsHTMLString = resultsBuilder(thing1, thing2, i, spanName);
    // put the resulting HTML string in the DOM
    document.querySelector(".results-box").innerHTML += resultsHTMLString;

}
//prints saved itineraries to the itinerary.html page
const printItinerary = (location, thing) => {
  document.querySelector(`${location}`).innerHTML += thing; //inserts returned variable into the dom at specified location //replaces existing content
}
