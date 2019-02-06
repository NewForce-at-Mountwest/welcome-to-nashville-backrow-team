const printDinoCard = (dinoName, imageUrl) => {
    const dinoHTMLString = dinoCard(dinoName, imageUrl);

    // put the resulting HTML string in the DOM
    document.querySelector(
      "#search-results"
    ).innerHTML += dinoHTMLString;

}