const newItem = (itineraryObject) => {
    fetch("http://localhost:8088/itinerary", {
        method: "POST", // or "PUT"
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itineraryObject)
    })
}


let itinerary = {
    meetup: "",
    restaurant: "",
    concert: ""
}


changeItinerary = (meetup, restaurant, concert) => {
    document.querySelector("#rest-itin").textContent
    itinerary = `{meetup: ${meetup}, restauraunt: ${restaurant}, concert: ${concert}}`;
    newItem(itinerary);
    return itinerary;
}



newItem(itinerary);