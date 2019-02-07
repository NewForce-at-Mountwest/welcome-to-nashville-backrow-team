document.querySelector(".results-box").addEventListener("click", () =>{

    console.log(`You clicked the button ${event.target.id}`)
console.log(event.target.id)
let clicker =event.target.id
console.log(clicker)
let splitArray = clicker.split("-");
console.log(splitArray)
let i = splitArray[1];
document.querySelector(`#span-${i}`)
console.log(i)

})