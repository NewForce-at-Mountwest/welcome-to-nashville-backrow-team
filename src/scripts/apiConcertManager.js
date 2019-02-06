//find concerts in Nashville based up genre
const findConcert = (genre) => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&classificationName=${genre}&apikey=E6QsEDsPDjQn8AKpW23mpb5mYIQvE661`)
        //gets data from Ticketmaster, filtered by Nashville Only, and genre. Genre is a passable param so the user can search by genre.
        //api key E6QsEDsPDjQn8AKpW23mpb5mYIQvE661 ---DO NOT CHANGE KEY! ---
        .then(response => response.json())
        .then(response => {
            console.log(response._embedded.events)
            //logs the returned events
            const top4Concerts = [] //this is temporary so that I can make sure I'm grabing the correct information
            for (i = 0; i < 4; i++) {
                top4Concerts.push(`${response._embedded.events[i].name}, ${response._embedded.events[i].dates.start.localDate}, ${response._embedded.events[i].dates.start.localTime} `);
                console.log(top4Concerts);
            }

        })
    //gather only top 4's name and date
    //convert to html string
    //post to DOM

}

const rockConcert = findConcert("rock");