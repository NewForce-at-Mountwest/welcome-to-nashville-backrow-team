fetch("http://localhost:8088/itinerary", {
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(itin => itin.json())
    .then(parsedItin => {
        console.log(parsedItin)
        parsedItin.forEach(element => {
            console.log(element)

            //build the HTML String

            let objectString = `<div class="card" id ="saved-itin-card-${element.id}" style="width: 25rem;">

  <div class="card-body" >
  <h3>Itinerary ${element.id}</h3>
    <p class="card-text"><strong>Restaurant:</strong> ${element.restaurant}.</p>
    <p class="card-text"><strong>Meetup:</strong> ${element.meetup}.</p>
    <p class="card-text"><strong>Concert:</strong> ${element.concert}.</p>
    <p class="card-text"><strong>Park:</strong> ${element.park}.</p>
    <button type="button" id="del-itin-btn-${element.id}">Delete</button>
    <button type="button" id="edit-itin-btn-${element.id}">Edit</button>
  </div>
</div>`

            // Send the HTML string to the dom on itineraries page
            printItinerary("#saved-itins", objectString)
        });
    })

document.querySelector("#saved-itins").addEventListener("click", function () {
    let elementId = event.target.id.split("-")

    console.log(elementId)


    let selectCardDiv = document.querySelector(`#saved-itin-card-${elementId[3]}`)
    document.querySelector("#saved-itins").removeChild(selectCardDiv)
})