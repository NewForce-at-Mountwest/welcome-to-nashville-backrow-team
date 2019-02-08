const deleteALL = (itineraryObject) => {
    fetch("http://localhost:8088/itinerary/", {
        method: "DELETE", // or "POST"
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itineraryObject)
    })
}