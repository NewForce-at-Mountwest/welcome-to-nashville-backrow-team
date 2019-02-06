
const apiRestManager = (input) =>{





fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=`${input}`", {
        headers: {
            "Accept": "application/json",
            "user-key": "27a979ccc1766e311e8c4e3afe68dac7"
        }
    })
    .then(r => r.json())
    .then(results => {

        console.log(results)
        
        for(i=0; i<results.restaurants.length; i++){
       
            console.log(results.restaurants[i].restaurant.cuisines);
        }

        // console.log(results.restaurants)

        
     
    })}

    apiRestManager();

    
    
    
    
    
    // https://developers.zomato.com/api/v2.1/cuisines?city_id=1138
    // https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating