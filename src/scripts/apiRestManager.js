
const apiRestManager = (userInput) =>{

fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput}`, {
        headers: {
            "Accept": "application/json",
            "user-key": "27a979ccc1766e311e8c4e3afe68dac7"
        }
    })
    .then(rest => rest.json())
    .then(parsedRest => {

        console.log(parsedRest.restaurants[0])
        let restString = "";
        for(i=0; i<4; i++){
            restName = parsedRest.restaurants[i].restaurant.name 
            restLocation = parsedRest.restaurants[i].restaurant.location.address
            restString += resultsBuilder(restName, restLocation, i)
        }

        console.log(restName)



        
        

        

        
     
    })}
   
    apiRestManager("burger");
    apiRestManager("chinese");
    apiRestManager("sandwich");

    
    
    
    
    