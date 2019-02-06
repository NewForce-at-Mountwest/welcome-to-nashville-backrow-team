const printResults = (thing1, thing2, i) => {
  //gather string data
  const resultsHTMLString = resultsBuilder(thing1, thing2, i);
  // put the resulting HTML string in the DOM
  document.querySelector(".results-box").innerHTML += resultsHTMLString;

}


//prints itinerary data to itinerary section in the DOM
const printItinerary = (location) => {
  const itinString = intineraryResults(); //calls and gathers string data, storing it into a variable
  document.querySelector(`${location}`).innerHTML = itinString; //inserts returned string into the dom at specified location
}