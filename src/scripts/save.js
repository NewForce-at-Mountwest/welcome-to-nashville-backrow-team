document.querySelector(".results-box").addEventListener("click", () => {
    let clicker = event.target.id
    let splitArray = clicker.split("-");
    let spanName = splitArray[0]
    let i = splitArray[2];


    nodeToClone(spanName, i)
})