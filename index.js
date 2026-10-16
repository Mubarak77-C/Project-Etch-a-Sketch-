//const { createElement } = require("react");

console.log('hy');
// const input = document.querySelector("input");
// const inputUser=input.value; // ❌ Happens instantly when the page loads!
//defer load first html then js so input.value take as "" whenever load so check below code
// const actGrid= addEventListener("hover",(inputUSer)={

//## inputUSer in paramerter arropw func should empptuy ()->{}
//
// });

const input = document.querySelector("input");
const submitBtn = document.querySelector("#submit-btn");
const container = document.querySelector("#grid-container");
const clearBtn = document.querySelector("#clear-btn"); //clear grid color hover mean mouseover
const blackBtn = document.querySelector("#black-mode-btn");
const rainbowBtn = document.querySelector("#rainbow-mode-btn");

//const randomColor = `rgb(${r}, ${g}, ${b})`;


let currentMode = "black"; // Default mode

// 3. MODE BUTTON EVENT LISTENERS (Placed globally, NOT inside submitBtn)
blackBtn.addEventListener("click", () => {
    currentMode = "black";
});

rainbowBtn.addEventListener("click", () => {
    currentMode = "rainbow";
});



    clearBtn.addEventListener("click", () => {
        const allCells = document.querySelectorAll(".grid-cell");
        allCells.forEach(cell => {
            cell.style.backgroundColor = ""; //Clears the inline background color style
        });
    });




submitBtn.addEventListener("click", () => {
    // 3. Grab the value INSIDE the function, right when the user clicks!
    // Also, wrap it in Number() or parseInt() because input values are strings by default
    const inputUser = Number(input.value);

    if (inputUser < 1 || inputUser > 100) {
        alert("Please Enter number from 1 to 100");
        return; // <--- THIS STOPS THE CODE FROM RUNNING ANY FURTHER!
    }
    console.log(inputUser);


    const totalcells = inputUser * inputUser; //N x N row coln grid as user input


    // This sets the grid layout dynamically (e.g., repeat(4, 1fr))
    container.style.gridTemplateColumns = `repeat(${inputUser}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${inputUser}, 1fr)`;


    container.innerHTML = ''; //wipe out whatever grid user putted from #grid-container
    //loop and appending css to visualise by createElement div and append to container to visible 


    for (let i = 0; i < totalcells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell"); // Use this class in CSS to give cells a border
        cell.addEventListener("mouseover", () => {
            // cell.style.backgroundColor = "black";   //for single black now need to check whether user clicked rainbow or black btn
            if(currentMode === "black"){
                cell.style.backgroundColor="black";
            }else if(currentMode="rainbow"){
                // Generate your random RGB color here!
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
       
        });
        container.appendChild(cell);
    }




    // At the end of your submit button click event:
    input.value = ''; //clear input text as user given
});



