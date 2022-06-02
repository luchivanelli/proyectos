pantalla = document.querySelector(".pantalla")
ac = document.querySelector(".ac")
mas = document.querySelector(".mas")
menos = document.querySelector(".menos")
siete = document.querySelector(".siete")
ocho = document.querySelector(".ocho")
nueve = document.querySelector(".nueve")
por = document.querySelector(".por")
cuatro = document.querySelector(".cuatro")
cinco = document.querySelector(".cinco")
seis = document.querySelector(".seis")
divisor = document.querySelector(".divisor")
uno = document.querySelector(".uno")
dos = document.querySelector(".dos")
tres = document.querySelector(".tres")
igual = document.querySelector(".igual")
cero = document.querySelector(".cero")
var num1, num2;



const imprimir = (boton)=> {
    boton.addEventListener("click", ()=> {
        valorBoton = boton.textContent
        pantalla.textContent += valorBoton

        if (boton == igual) {
            operar()
        }

        if (boton == ac) {
            pantalla.textContent = ""
        }
        
    })
}

const operar = ()=> {
    let operacion = pantalla.textContent
    if (operacion.includes("+")) {
        posOperador = operacion.indexOf("+")
        num1=""
        num2=""
        for (let i=0; i<posOperador;i++) {
            num1 += operacion[i]
        }
        for (let i=posOperador+1; i<operacion.length-1;i++) {
            num2 += operacion[i]
        }

        resultado = parseInt(num1) + parseInt(num2)
        pantalla.textContent += resultado
    }
    if (operacion.includes("-")) {
        posOperador = operacion.indexOf("-")
        num1=""
        num2=""
        for (let i=0; i<posOperador;i++) {
            num1 += operacion[i]
        }
        for (let i=posOperador+1; i<operacion.length-1;i++) {
            num2 += operacion[i]
        }

        resultado = parseInt(num1) - parseInt(num2)
        pantalla.textContent += resultado
    }
    if (operacion.includes("x")) {
        posOperador = operacion.indexOf("x")
        num1=""
        num2=""
        for (let i=0; i<posOperador;i++) {
            num1 += operacion[i]
        }
        for (let i=posOperador+1; i<operacion.length-1;i++) {
            num2 += operacion[i]
        }

        resultado = parseInt(num1) * parseInt(num2)
        pantalla.textContent += resultado
    }
    if (operacion.includes("÷")) {
        posOperador = operacion.indexOf("÷")
        num1=""
        num2=""
        for (let i=0; i<posOperador;i++) {
            num1 += operacion[i]
        }
        for (let i=posOperador+1; i<operacion.length-1;i++) {
            num2 += operacion[i]
        }

        resultado = parseInt(num1) / parseInt(num2)
        pantalla.textContent += resultado
    }
}

imprimir(uno)
imprimir(dos)
imprimir(tres)
imprimir(cuatro)
imprimir(cinco)
imprimir(seis)
imprimir(siete)
imprimir(ocho)
imprimir(nueve)
imprimir(cero)
imprimir(mas)
imprimir(menos)
imprimir(por)
imprimir(divisor)
imprimir(igual)
imprimir(ac)