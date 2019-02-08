const deleteDB = () => {
    fetch("http://localhost:8088/itinerary/", {
        method: "DELETE", // or "POST"
        headers: {
            "Content-Type": "application/json",
        },
    })
}
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

const deleteALL = () =>{
    deleteDB();
    clearFields();
}

document.querySelector("#start-over").addEventListener("click", () => {
    deleteALL();
})