const newItem = (itineraryObject) => {
    fetch("http://localhost:8089/itinerary", {
        method: "POST", // or "PUT"
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itineraryObject)
    })
}