const addItem = (itineraryObject) => {
    fetch("http://localhost:8088/itinerary/", {
        method: "POST", // or "POST"
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itineraryObject)
    })
}

const addItinerary = () => {
    let restaurantVar = splitStringTC("#rest-itin");
    let meetupVar = splitStringTC("#meet-itin");
    let concertVar = splitStringTC("#conc-itin");
    let parkVar = splitStringTC("#park-itin");
    itineraryVar = {
        meetup: meetupVar,
        restauraunt: restaurantVar,
        concert: concertVar,
        park: parkVar
    };
    console.log(itineraryVar);
    addItem(itineraryVar);
    return itineraryVar;
}

document.querySelector("#add-to-list").addEventListener("click", () => {
    addItinerary()
})