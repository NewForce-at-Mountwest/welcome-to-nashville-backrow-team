const newItem = (itineraryObject) => {
    fetch("http://localhost:8088/itinerary/", {
        method: "POST", // or "POST"
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itineraryObject)
    })
}

