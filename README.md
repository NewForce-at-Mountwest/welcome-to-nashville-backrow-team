# Welcome to Nashville: Build an itinerary for a day trip to Music City

To use this page: fork the repo and clone it to your local machine.  Navigate to the directory src/lib in the project and run:

```js
npm install
```

change back to the root project directory of the project and type:
```js
code .
```
to open all files in visual basic.

You will need to look for the following file

```js
src/lib/grunt/bgShell.js
```

and change:
```js
cmd: "json-server -p 8088 -w ../../api/db.json"
```
to:

```js
cmd: "json-server -p 8088 -w ../../api/itinerary.json"
```
In your terminal navigate back to the src/lib directory and type:

```js
grunt
```
to run an HTML and JSON server simultaneously.

There are many things to see and do in Nashville.  This page will allow you to search four different categories:

* Restaurants--search by food type, such as 'Chinese' or 'American'
* Meetups--search by topic, such as 'running' or 'knitting'
* Concerts--search by music genre, such as 'rock' or 'country'
* Parks--search by park feature, such as 'dog park' or 'playground'

## Search
When you enter a term in the search bar, click the 'search' button next to the search field.


![Alt text](images/searchfield.jpg?raw=true "searchfield")



The results of each individual search will populate the results box down below.

![Alt text](images/results.jpg?raw=true "results")



If you click the "save" button next to any one of those results, it will add it to your itinerary at the bottom of the page.


![Alt text](images/itinerary.jpg?raw=true "itinerary")



If you decide you would rather save a different search result, you can click a different save button and it will replace what is in your itinerary for that category.

You can continue to search through the four different categories (Restaurants, Meetups, Concerts, and Parks) and add things to your itinerary as desired.



![Alt text](images/fullpage.jpg?raw=true "wholepage")



## Finalize and Save Your Itinerary
Once your itinerary is the way you like it, you can click "save current itinerary" to finalize and save it.

If you would like to make multiple itineraries, you can click the "add to itinerary list" button.  Note, clicking this button multiple times will continue to add the current itinerary to the list over and over.

## View Saved Itineraries
To see your saved itineraries, click on the "saved itineraries" tab at the top of the page.  This will take you to a new page that has a list of your saved itineraries.

![Alt text](images/savedlist.jpg?raw=true "saved itineraries")

If you would like to delete one of these itineraries, just click the 'delete' button and it will disappear from the page.

You can always switch back to the "Build Itinerary" page to see the search fields again and build another itinerary.

We hope you find this tool helpful and you enjoy your time in Music City!


### Bug fixes in future versions
Currently the json database is able to accept put and post data, but we have not figured out how to delete individual records.  Consequently, deleting a record only deletes it from the DOM and not from the database.  Refresh the page and it will return.

### Contributors:
Russ Miller

Michelle Tabor

Sydney Wait