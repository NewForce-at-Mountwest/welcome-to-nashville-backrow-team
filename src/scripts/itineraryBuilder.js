//Function to take a node based on ID data and append it to an element by id
let nodeToClone = (spanName, i) => {
    let nodeToClone = document.querySelector(`#${spanName}-${i}`).cloneNode(true)
    document.querySelector(`#${spanName}-itin`).innerHTML = ""
    document.querySelector(`#${spanName}-itin`).appendChild(nodeToClone)
}