document.querySelector(".results-box").addEventListener("click", () =>{
let clicker =event.target.id
let splitArray = clicker.split("-");
let spanName = splitArray[0]
let i = splitArray[2];

// console.log(document.querySelector(`#${spanName}-${i}`))
let nodeToClone = document.querySelector(`#${spanName}-${i}`).cloneNode(true)
document.querySelector(`#${spanName}-itin`).innerHTML=""
document.querySelector(`#${spanName}-itin`).appendChild(nodeToClone)

})

