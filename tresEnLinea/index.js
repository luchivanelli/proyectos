let turno = 0;
let tablero= [];
let respuesta= false;
let contenedorDeTexto = document.querySelector(".text")

const botonPulsado = (e) => {
    turno++
    const boton = e.target;
    if (turno % 2 == 0) {
        const div= document.createElement("DIV");
        div.textContent = "O";
        boton.appendChild(div);

        let pos = boton.classList.item(1);
        tablero[pos-1] = "O"
        respuesta = ganador();
        if (respuesta) {
            texto = document.createElement("P");
            texto.textContent= "El jugador 'O' ha ganado";
            contenedorDeTexto.appendChild(texto);
        }
        
    } else {
        const div= document.createElement("DIV");
        div.textContent = "X";
        boton.appendChild(div);

        let pos = boton.classList.item(1);
        tablero[pos-1] = "X"
        respuesta = ganador();
        if (respuesta) {
            texto = document.createElement("P");
            texto.textContent= "El jugador 'X' ha ganado";
            contenedorDeTexto.appendChild(texto);
        }
    }
}

item = document.querySelectorAll(".grid-item")
item.forEach(obj => {
    obj.addEventListener("click", botonPulsado);
} );



const ganador = ()=> {
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
        return true;
    }
}

