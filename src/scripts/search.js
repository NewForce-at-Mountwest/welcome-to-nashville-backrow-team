//Click event for the div box around the search forms
document.querySelector("#search-boxes").addEventListener("click", () => {
//split the ID and put in the array so we can use the component strings
    let targeted = event.target.id.split("-")


    if (targeted[2] === "btn") {
        if (targeted[0] === "rest") {
            let searchTerm = document.querySelector(`#${targeted[0]}Search`).value
            apiRestManager(searchTerm)
        }
        if (targeted[0] === "meet") {
            let searchTerm = document.querySelector(`#${targeted[0]}Search`).value
            apiMeetManager(searchTerm, "S4NNLY5SFHVXOGTJC56G")
        }
        if (targeted[0] === "conc") {
            let searchTerm = document.querySelector(`#${targeted[0]}Search`).value
            findConcert(searchTerm)
        }
    }
})




