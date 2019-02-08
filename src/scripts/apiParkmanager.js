//function to fetch data from zomato API and return results to DOM
const apiParkManager = (userInput) => {
    //this clears the Results before it poplulates with new results
    document.querySelector(".results-box").innerHTML = "";
    //this fetches only parks from Nasville with a feature that the user inputs
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${userInput}=Yes`, {

    })
        .then(park => park.json())
        .then(parsedPark => {

            // console.log(parsedPark)
            // console.log(parsedPark[0].park_name)
            // console.log(parsedPark[0].mapped_location_address)
            // this selects only the top 4 results
            for (i = 0; i < 4; i++) {
                let parkName = parsedPark[i].park_name;
                let parkLocation = parsedPark[i].mapped_location_address;

                printResults(parkName, parkLocation, i, "park")
            }

        })
}

// apiParkManager("playground")