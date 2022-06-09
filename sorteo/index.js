let button = document.querySelector(".form-button")
let textarea = document.querySelector(".participants-input")
let firstSection = document.querySelector(".first-section")

let array = [];
let count = 0;


getParticipants = ()=> {
    let participants = textarea.value
    let name = ""
    for (let index = 0; index < participants.length; index++) {
        if (participants[index] != ",") {
            name += participants[index]
        } else {
            array.push(name)
            count++
            name = ""
        }  
    }
    array.push(name)
    count++
}

getTitle = ()=> {
    let title = document.getElementById("title-input").value
    lotTitle = title
    return title
}

getWinner = (min,max)=> {
    numRandom = Math.floor(Math.random() * (max - min)) + min;
    return numRandom
}


button.addEventListener("click", (e)=> {
    e.preventDefault()
    getParticipants()
    winner = getWinner(0,array.length-1)

    title = getTitle()
    let p1 = document.createElement("P")
    p1.classList = "p1"
    p1.innerHTML = `Cantidad de participantes: <b>${count}</b><br><b>'${title}'</b> se está realizando. <br> Aguarde 5 segundos...`
    firstSection.appendChild(p1)
    
    window.setTimeout(showWinner, 5000)
})


showWinner = ()=> {
    let p2 = document.createElement("P")
    p2.classList = "p2"
    p2.innerHTML = `El ganador es <b>${array[winner]}</b>`
    firstSection.appendChild(p2)  
}