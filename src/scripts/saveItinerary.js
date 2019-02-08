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
    park: "",
}
console.log(document.querySelector("#rest-itin").innerText);
const splitStringTC = (location) => {
    let arr = document.querySelector(location).innerText
    console.log(arr);
    return arr;
}


const changeItinerary = () => {
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
    newItem(itineraryVar);
    return itineraryVar;
}

document.querySelector("#save-all-itin").addEventListener("click", () => {
    changeItinerary()
})