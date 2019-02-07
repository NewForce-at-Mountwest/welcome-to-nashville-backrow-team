//function to fetch data from zomato API and return results to DOM
const apiRestManager = (userInput) => {
    //this clears the Results before it poplulates with new results
    document.querySelector(".results-box").innerHTML = "";
    //this fetches only restaurants from Nasville with a food type that the user inputs
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput}`, {
        headers: {
            "Accept": "application/json",
            "user-key": "27a979ccc1766e311e8c4e3afe68dac7"
        }
    })
        .then(rest => rest.json())
        .then(parsedRest => {


            //this selects only the top 4 results with the best user ratings/reviews
            for (i = 0; i < 4; i++) {
                let restName = parsedRest.restaurants[i].restaurant.name
                let restLocation = parsedRest.restaurants[i].restaurant.location.address
                printResults(restName, restLocation, i)
            }

        })
}
//these are test function call to make sure the function works
// apiRestManager("burger");
// apiRestManager("chinese");
// apiRestManager("sandwich");
















