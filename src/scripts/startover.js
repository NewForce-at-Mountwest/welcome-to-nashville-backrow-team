// const deleteDB = (itineraryObject) => {
//     fetch("http://localhost:8088/itinerary/1", {
//         method: "DELETE", // or "POST"
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             id: itineraryObject
//         })
//     })
// }
const clearFields = () => {
    document.getElementById("restSearch").reset();
    document.getElementById("meetSearch").reset();
    document.getElementById("concSearch").reset();
    document.getElementById("parkSearch").reset();
    document.querySelector("#results-box").innerHTML = "";
    document.getElementById("rest-itin").innerHTML = "";
    document.getElementById("meet-itin").innerHTML = "";
    document.getElementById("conc-itin").innerHTML = "";
    document.getElementById("park-itin").innerHTML = "";
}

const deleteALL = () => {
    // deleteDB();
    clearFields();
}

document.querySelector("#start-over").addEventListener("click", () => {
    deleteALL();
})