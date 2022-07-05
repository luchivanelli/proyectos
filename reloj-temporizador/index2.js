startButton = document.querySelector(".start-timer")
deleteButton = document.querySelector(".delete-timer")

startButton.addEventListener("click", ()=> {
    minutes = document.getElementById("minutes").value
    if (minutes == "") {
        alert("Indique cantidad de minutos")
    } else {
        let seconds = 0
        const startTimer = ()=> {
            if (seconds == 0) {
                seconds = 60
                minutes--
            }
            seconds--
            if (seconds < 10) {
                seconds = "0" + seconds
            }
            if (minutes == 0 && seconds == 0) {
                clearInterval(timerInterval)
                document.querySelector(".timer").textContent = "0:00"
                alert("Su tiempo terminó")
            }
            document.querySelector(".timer").textContent = `${minutes}:${seconds}`
        }
        timerInterval = setInterval(()=>startTimer(), 1000)
    }
}) 

deleteButton.addEventListener("click", ()=> {
    clearInterval(timerInterval)
    document.querySelector(".timer").textContent = "0:00"
})
