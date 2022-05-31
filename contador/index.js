counter = document.querySelector(".counter");
buttonDecrement = document.getElementById("button-1");
buttonReset = document.getElementById("button-2");
buttonIncrement = document.getElementById("button-3");
i= 0;

counter.textContent = 0
 
buttonIncrement.addEventListener('click', ()=> {
    i+= 1; //incremento en el contador
    counter.innerHTML = i;  //agrega el valor del contador al DOM
    classCounter = counter.classList.item(1);  //guarda en classCounter el valor de la 2da clase de "counter"
    counter.classList.replace(classCounter, i);  //reemplaza la 2da clase por el valor del contador
})    

buttonDecrement.addEventListener('click', ()=> {
    i-= 1;  //decremento en el contador
    counter.innerHTML = i;
    classCounter = counter.classList.item(1);
    counter.classList.replace(classCounter, i);
})

buttonReset.addEventListener('click', ()=> {
    i=0;  //reseteo del contador
    counter.innerHTML = i;
    classCounter = counter.classList.item(1);
    counter.classList.replace(classCounter, i);
})