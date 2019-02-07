//Click event for the restaurant search button
document.querySelector("#rest-search-btn").addEventListener("click", () =>{
    console.log("You clicked the button")
    let searchTerm = document.querySelector("#restSearch").value
    console.log("This is the restaurant search term:", searchTerm)
    apiRestManager(searchTerm)

})

//Click event for the meetups search button
document.querySelector("#meet-search-btn").addEventListener("click", () =>{
    console.log("You clicked the button")
    let searchTerm = document.querySelector("#meetSearch").value
    console.log("This is the meetups search term:", searchTerm)
    apiMeetManager(searchTerm, "S4NNLY5SFHVXOGTJC56G")

})

//Click event for the concerts search button
document.querySelector("#conc-search-btn").addEventListener("click", () =>{
    console.log("You clicked the button")
    let searchTerm = document.querySelector("#concertSearch").value
    console.log("This is the concert search term:", searchTerm)
    findConcert(searchTerm)

})