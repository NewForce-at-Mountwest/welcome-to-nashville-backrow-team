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
    concert: "",
    park: ""
}

const splitStringTC = (location) => {
    let arr = document.querySelector(location).innerText.split(":")
    console.log(arr)
    singlestring = arr[1].trim();
    console.log(singlestring);
    return singlestring;
}


const changeItinerary = () => {
    let restaurantVar = splitStringTC("#restaurants-itin");
    let meetupVar = splitStringTC("#meetup-itin");
    let concertVar = splitStringTC("#concert-itin");
    let parkVar = splitStringTC("#parkFeature-itin");
    itineraryVar = {
        meetup: meetupVar,
        restauraunt: restaurantVar,
        concert: concertVar,
        park: parkVar
    };
    console.log(itineraryVar);
    newItem(itineraryVar);
    return itineraryVar;
}

document.querySelector("#save-all-itin").addEventListener("click", () => {
    changeItinerary()
})