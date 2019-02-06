// build a function that hits the API and returns the name and url of a meetup based on the search input
//
const apiMeetManager = (searchField, token) => {

    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchField}&token=${token}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
        }
    })
        .then(meets => meets.json())
        .then(parsedMeets => {
            console.log(parsedMeets)

            for (i = 0; i < 4; i++) {
                let meetupName = parsedMeets.events[i].name.text
                let meetupDate = parsedMeets.events[i].start.local
                meetupDate = meetupDate.replace("T"," @ ")
                // call results builder and
                // resultsBuilder(meetupName, meetupURL)

                console.log(meetupName, meetupDate);
            }
        }
        )


}

apiMeetManager("running", "S4NNLY5SFHVXOGTJC56G");
