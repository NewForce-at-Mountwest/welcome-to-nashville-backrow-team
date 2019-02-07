// build a function that hits the API and returns the name and url of a meetup based on the search input
//
const apiMeetManager = (searchField, token, nameSpan) => {

    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchField}&token=${token}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
        }
    })

        .then(meets => meets.json())
        .then(parsedMeets => {
            // console.log(parsedMeets)
            let resultsString = ""
            document.querySelector(".results-box").innerHTML = "";
            for (i = 0; i < 4; i++) {
                let meetupName = parsedMeets.events[i].name.text
                let meetupDate = parsedMeets.events[i].start.local
                meetupDate = meetupDate.replace("T"," @ ")


                printResults(meetupName, meetupDate,i,"meet")

                // console.log(meetupName, meetupDate);
                // console.log(resultsString)
            }

        }
        )


}

// apiMeetManager("running", "S4NNLY5SFHVXOGTJC56G");
