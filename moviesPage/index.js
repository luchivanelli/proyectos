let boton = document.querySelector(".button")
let input = document.querySelector(".seacher")


boton.addEventListener("click", ()=> {
    let info = input.value
    switch (info) {
        case "1":
            alert("Acabas de elegir la pelicula: 'Coraline y la puerta secreta'")
            break;
        case "2":
            alert("Acabas de elegir la pelicula: 'Ron da error'")
            break;
        case "3":
            alert("Acabas de elegir la pelicula: 'Alicia en el pais de las maravillas'")
            break;
        case "4":
            alert("Acabas de elegir la pelicula: 'La pelicula de stitch'")
            break;
        case "5":
            alert("Acabas de elegir la pelicula: 'Encanto'")
            break;
        case "6":
            alert("Acabas de elegir la pelicula: 'High School Musical'")
            break;
        case "7":
            alert("Acabas de elegir la pelicula: 'Starstruck: Mi novio es una súperestrella'")
            break;
        case "8":
            alert("Acabas de elegir la pelicula: 'Esperando la carroza'")
            break;
        case "9":
            alert("Acabas de elegir la pelicula: 'Alicia a través del espejo'")
            break;
        case "10":
            alert("Acabas de elegir la pelicula: 'El conjuro 1'")
            break;
        case "11":
            alert("Acabas de elegir la pelicula: 'El conjuro 2'")
            break;
        case "12":
            alert("Acabas de elegir la pelicula: 'El conjuro 3'")
            break;
        case "13":
            alert("Acabas de elegir la pelicula: '¿Conoces a Joe Black?'")
            break;
        case "14":
            alert("Acabas de elegir la pelicula: 'La sociedad de los poetas muertos'")
            break;
        case "15":
            alert("Acabas de elegir la pelicula: 'Delibal'")
            break;
        case "16":
            alert("Acabas de elegir la pelicula: Vidas de papel'")
            break;
        case "16":
            alert("Acabas de elegir la pelicula: Una cuestión de tiempo'")
            break;
        default:
            alert("La pelicula elegida no es correcta")
            break;
    }
})


