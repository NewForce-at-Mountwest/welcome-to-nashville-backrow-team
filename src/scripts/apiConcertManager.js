//find concerts in Nashville based up genre
const findConcert = (genre) => {
    document.querySelector(".results-box").innerHTML = "";
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&classificationName=${genre}&apikey=E6QsEDsPDjQn8AKpW23mpb5mYIQvE661`)
        //gets data from Ticketmaster, filtered by Nashville Only, and genre. Genre is a passable param so the user can search by genre.
        //api key E6QsEDsPDjQn8AKpW23mpb5mYIQvE661 ---DO NOT CHANGE KEY! ---
        .then(response => response.json())
        .then(response => {
            //logs the returned events
            for (i = 0; i < 4; i++) {
                let top4ConcertName = response._embedded.events[i].name //this stores the information and is passed into the printToDOM function
                let top4ConcertDates = response._embedded.events[i].dates.start.localDate
                printResults(top4ConcertName, top4ConcertDates, i); //builds an htmlstring and prints that string to the DOM
            }

        })
}

const rockConcert = findConcert("rock");