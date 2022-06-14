import {getColor} from "./functions.js";
import {container,colorName,button,colorsArray} from "./elements.js"


button.addEventListener("click", ()=> {
    let numberColor = getColor(0,colorsArray.length-1)

    switch (numberColor) {
        case 0:
            colorName.textContent = "Background color: Red"
            container.style.background = "#d50000"
            break;
        case 1:
            colorName.textContent = "Background color: Yellow"
            container.style.background = "#ffea00"
            break;
        case 2:
            colorName.textContent = "Background color: Blue"
            container.style.background = "#1a237e"
            break;
        case 3:
            colorName.textContent = "Background color: Green"
            container.style.background = "#4caf50"
            break;
        case 4:
            colorName.textContent = "Background color: Pink"
            container.style.background = "#ec407a"
            break;
        case 5:
            colorName.textContent = "Background color: Brown"
            container.style.background = "#c75b39"
            break;
        case 6:
            colorName.textContent = "Background color: Purple"
            container.style.background = "#6a1b9a"
            break;
        case 7:
            colorName.textContent = "Background color: White"
            container.style.background = "#ffffff"
            break;
        case 8:
            colorName.textContent = "Background color: Orange"
            container.style.background = "#f4511e"
            break;
        case 9:
            colorName.textContent = "Background color: Light blue"
            container.style.background = "#81d4fa"
            break;
        case 10:
            colorName.textContent = "Background color: Gray"
            container.style.background = "#90a4ae"
            break;
        case 11:
            colorName.textContent = "Background color: Aqua marine"
            container.style.background = "#1de9b6"
            break;
    }

})


