const grid = document.getElementById("squareContainer");
const clearBtn = document.querySelector("#clear");
const slider = document.querySelector("#slider")
const sliderValue = document.querySelector("span");
const defaultButton = document.querySelector("#default");
const rainbowButton = document.querySelector("#rainbow");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function writing (value) {
    for (j=0;j < value ; j++) {
        grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${value}, 1fr)`;
        for (i=0; i< value ; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            grid.appendChild(square);
            square.style.backgroundColor = "black"
        } 
    } 
    
    const gridElements = document.querySelectorAll(".square");
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].addEventListener("mouseover", () => {
            if (mouseDown == true) {
                gridElements[i].style.backgroundColor = "black";
            } else {
                return
            }
        })
    }

    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].style.backgroundColor = "white";
        
    }
    
    clearBtn.addEventListener("click", () => {
        for (let i = 0; i < gridElements.length; i++) {
            gridElements[i].style.backgroundColor = "white";
        }
    }); 

}

let value= slider.value;
sliderValue.textContent = value + "x" + value;

slider.oninput = () => {
    const value= slider.value;
    sliderValue.textContent = value + 'x' + value;  
    writing(value);
}
writing(value);

/*var currentMode = "black";;

function modeChange() {
    if (currentMode == "black") {
        currentMode = "rainbow";
    } else if (currentMode == "rainbow") {
        currentMode = "black"
    }
};

rainbowButton.addEventListener("click", () =>{
    modeChange();
})
defaultButton.addEventListener("click", () => {
    modeChange();
})

function RGBcolor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
    console.log(randomcolor);
  }
 */ 






 












