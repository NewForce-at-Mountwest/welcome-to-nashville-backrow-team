document.querySelector(".results-box").addEventListener("click", () =>{

console.log(`You clicked the button ${event.target.id}`)
console.log(event.target.id)
let clicker =event.target.id
console.log(clicker)
let splitArray = clicker.split("-");
console.log(splitArray)
let spanName = splitArray[0]
let i = splitArray[2];
console.log(document.querySelector(`#${spanName}-${i}`))
let nodeToClone = document.querySelector(`#${spanName}-${i}`).cloneNode(true)

document.querySelector(`#${spanName}-itin`).innerHTML=""
document.querySelector(`#${spanName}-itin`).appendChild(nodeToClone)
//

})