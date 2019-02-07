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

const splitStringTC =(location)=>{
    arr = document.querySelector(location).textContent.split(": ");
    singlestring = arr[1];
    console.log(singlestring);
    return singlestring;
}


const changeItinerary = (event) => {
    console.log(event)
    let restaurantVar = splitStringTC("#restaurants-itin");
    let meetupVar = splitStringTC("#meetup-itin");
    let concertVar = splitStringTC("#concert-itin");
    itineraryVar = {meetup: meetupVar, restauraunt: restaurantVar, concert: concertVar};
    console.log(itineraryVar);
    newItem(itineraryVar);
    return itineraryVar;
}

document.querySelector("#save-all-itin").addEventListener("click", changeItinerary())