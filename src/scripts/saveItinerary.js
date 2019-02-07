const newItem = (itineraryObject) => {
    fetch("http://localhost:8088/itinerary/1", {
        method: "PUT", // or "POST"
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itineraryObject)
    })
}


let itineraryVar = {
    meetup: "",
    restaurant: "",
    concert: ""
}


changeItinerary = () => {
    let restaurantVar = document.querySelector("#rest-itin").textContent
    let meetupVar = document.querySelector("#meet-itin").textContent
    let concertVar = document.querySelector("#conc-itin").textContent
    itineraryVar = {meetup: meetupVar, restauraunt: restaurantVar, concert: concertVar};
    console.log(itineraryVar);
    newItem(itineraryVar);
    return itineraryVar;
}

document.querySelector("#save-all-itin").addEventListener("click", changeItinerary())