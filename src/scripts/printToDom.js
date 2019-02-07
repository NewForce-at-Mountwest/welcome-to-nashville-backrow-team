const printResults = (thing1, thing2, i) => {
  //gather string data
  const resultsHTMLString = resultsBuilder(thing1, thing2, i);
  // put the resulting HTML string in the DOM
  document.querySelector(".results-box").innerHTML += resultsHTMLString;

}


//prints itinerary data to itinerary section in the DOM
const printItinerary = (location, itinItem, content) => {
  const itinString = cintineraryResults(itinItem, content); //calls and gathers string data, storing it into a variable //this function isn't named yet, this is a placeholder name
  document.querySelector(`${location}`).innerHTML = itinString; //inserts returned variable into the dom at specified location //replaces existing content
}

printItinerary("#meetup-itin", "MeetUp", "Adventures of the Gorge");