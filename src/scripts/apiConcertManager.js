const findConcert = (genre) => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=Nashville&classificationName=${genre}&apikey=E6QsEDsPDjQn8AKpW23mpb5mYIQvE661`)
        .then(response => response.json())
        .then(response => {
            console.log(response._embedded.events)
            const top4Concerts = []
            for (i = 0; i < 4; i++) {
                top4Concerts.push(`${response._embedded.events[i].name}, ${response._embedded.events[i].dates.start.localDate}, ${response._embedded.events[i].dates.start.localTime} `);
            }
            console.log(top4Concerts);
            return top4Concerts;
        })
    //gather only top 4's name and date
    //convert to html string
    //post to DOM
    //api key E6QsEDsPDjQn8AKpW23mpb5mYIQvE661
}

const rockConcert = findConcert("rock");