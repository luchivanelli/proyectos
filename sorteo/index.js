let button = document.querySelector(".form-button")
let textarea = document.querySelector(".participants-input")
let firstSection = document.querySelector(".first-section")

let array = [];
let count = 0;


getParticipants = ()=> {
    let participants = textarea.value  //obteniendo participantes
    if (participants == "") {
        return false    //si no se agregan participantes, retornar "falso", y que se termine la funcion
    }
    let name = ""
    for (let index = 0; index < participants.length; index++) {  
        if (participants[index] != ",") {
            name += participants[index]  //agregando cada caracter a la variable "name"
        } else {
            array.push(name)  //si se encuntra una coma, agregar "name" al array
            count++  //aumentar contador de participantes
            name = ""  //vaciando la variable
        }  
    }
    // al final del texto, no se agregará una coma, 
    // por lo tanto se terminará el ciclo sin haber agregado el ultimo participante
    // y sin haber aumentado el contador. Entonces:
    array.push(name)  
    count++
}

getTitle = ()=> {
    let title = document.getElementById("title-input").value
    lotteryTitle = title //otorgamos el valor de "title" a otra variable porque sino aparece como vacia
    return lotteryTitle
}

getWinner = (min,max)=> {
    numRandom = Math.floor(Math.random() * (max - min)) + min; //obteniendo numero aleatorio
    return numRandom
}

showWinner = ()=> {
    let p2 = document.createElement("P")
    p2.classList = "p2"
    p2.innerHTML = `El ganador es: <b>${array[winner]}</b>`
    firstSection.appendChild(p2)  
}


button.addEventListener("click", (e)=> {
    e.preventDefault()
    let res = getParticipants()
    if (res == false) {
        alert("No se han agregado participantes")
    } else {
        winner = getWinner(0,array.length-1)

        title = getTitle()
        if (title == "") {
            title = "Sin título"
        }

        let p1 = document.createElement("P")
        p1.classList = "p1"
        p1.innerHTML = `Cantidad de participantes: <b>${count}</b><br><b>'${title}'</b> se está realizando. <br> Aguarde 5 segundos...`
        firstSection.appendChild(p1)

        window.scroll({  //deslizar pantalla 260px hacia abajo
            top: 260,
            behavior: 'smooth'
        });
    
        window.setTimeout(showWinner, 5000) //se ejecutará showWiner despues de 5 segundos
    }
    
})


