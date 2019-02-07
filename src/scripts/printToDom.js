const printResults = (thing1, thing2, i) => {
  //gather string data
  const resultsHTMLString = resultsBuilder(thing1, thing2, i);
  // put the resulting HTML string in the DOM
  document.querySelector(".results-box").innerHTML += resultsHTMLString;

}


//prints itinerary data to itinerary section in the DOM
const printItinerary = (location, thing) => {
  document.querySelector(`${location}`).innerHTML = thing; //inserts returned variable into the dom at specified location //replaces existing content
}
