const showDate = ()=> {
    let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

    const today = new Date()
    const day = days[today.getDay()]
    const dayNumber = today.getDate()
    const month = months[today.getMonth()]
    const year = today.getFullYear()

    let hour = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    hour = addZero(hour)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    let date = `${day}, ${dayNumber} de ${month} del ${year}`

    document.querySelector(".time").innerHTML = `${hour}:${minutes}:${seconds}`
    document.querySelector(".date").innerHTML = date

    var time = setTimeout(()=> showDate(), 500);  //actializa la página cada medio segundo
}

addZero = (a)=> {
    if (a < 10) {
        a = "0" + a
    }
    return a
}