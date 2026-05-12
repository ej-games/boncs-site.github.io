
function onLoad() {
    populateCards()
}

function populateCards() {
    for(var item of speakers) {

        if(item.hidden) continue
        
        let itemToAdd = document.createElement("div");

        document.getElementById("main-cards").appendChild(itemToAdd);

        var link = item.room == "lower" ? "https://link.mazemap.com/iJuR9QfV" : "https://link.mazemap.com/TMyGZGvG";
        var roomName = item.room == "lower" ? "OC0.03" : "OC1.05";
        var roomClass = item.room == "lower" ? "" : "top"
        var colourProgress = (item.startTime - 10) / 7 * 100;

        var histofyLogo = item.histofy == undefined ? "" : "<span class='histofy-logo' onclick=\"window.location.href ='https://histofy.ai/'\"><img src='img/HistofyLogo_Light.png'></span>";

        if(item.room == "none" || item.room == undefined) {
            itemToAdd.outerHTML = String.raw`<div class="card">
    <span class="time" style="--progress: ${colourProgress}">${formatTime(item.startTime, item.endTime)}</span>
    <h2>${item.name}</h2>
    <h3>${item.title}</h3>
    ${item.content}
            </div>`
        }
        else {
            itemToAdd.outerHTML = String.raw`<div class="card">
    <span class="time" style="--progress: ${colourProgress}">${formatTime(item.startTime, item.endTime)}</span>
    ${histofyLogo}
    <span class="room ${roomClass}" onclick="window.location.href = '${link}'">${roomName}</span>
    <h2>${item.name}</h2>
    <h3>${item.preTitle == undefined ? "" : item.preTitle + ": "}&ldquo;${item.title}&rdquo;</h3>
    ${item.content}
            </div>`
        }


    }
}

function formatTime(start, end) {
    
    var startHour = Math.floor(start).toString().padStart(2, "0")
    var startMinutes = Math.round((start % 1) * 60).toString().padStart(2, "0")

    var endHour = Math.floor(end).toString().padStart(2, "0")
    var endMinutes = Math.round((end % 1) * 60).toString().padStart(2, "0")

    return startHour.toString() + ":" + startMinutes.toString() + " - " + endHour.toString() + ":" + endMinutes.toString()
}