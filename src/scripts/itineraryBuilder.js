const nodeToClone = (spanName) => {
    let nodeToClone = document.querySelector(`#${spanName}-${i}`).cloneNode(true)
    document.querySelector(`#${spanName}-itin`).innerHTML = ""
    document.querySelector(`#${spanName}-itin`).appendChild(nodeToClone)
}

//go to save.js and replace second part of inner function with nodeToClone(spanName);