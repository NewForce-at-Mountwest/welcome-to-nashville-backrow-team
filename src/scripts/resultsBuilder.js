//Build a function to make string from the things we pull from the API.
// thing1 is the name of the event, thing2 is the address, date, or other secondary info
//You need to also pass in the iterator so that we can give the buttons original ids

const resultsBuilder =(thing1, thing2, i) =>{
    return `<p>${thing1}: ${thing2}<button type="button" class="btn${i}">save</button></p>`

}