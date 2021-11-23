

function generateGrid(tailleDemande){
    if (!tailleDemande) resetGrid();
    taille = parseInt(tailleDemande);
    if (!Number.isInteger(taille)) resetGrid();
    const container = document.getElementById('container');
    const body = document.querySelector("body");
    const bodyWidth = Math.floor(body.offsetWidth*0.50);
    let drawZoneWidth;
    if (bodyWidth%taille == 0){
        drawZoneWidth = bodyWidth ;
    } else {
        drawZoneWidth = bodyWidth-bodyWidth%taille ;
    }

    container.style.width = `${drawZoneWidth}px`;
    container.style.height = `${drawZoneWidth}px`;

    let carreWidth;

    if (drawZoneWidth%taille == 0){
        carreWidth = drawZoneWidth/taille ;
    } else {
        carreWidth = (drawZoneWidth-(drawZoneWidth%taille))/taille ;
    }
    carreWidth += -2;

    const tailleCarre = taille*taille;
    for (let i = 1; i <= tailleCarre; i++){
        const carre =  document.createElement('div');
        carre.style.border = 'solid 0.1px black';
        carre.style.flex = '1 0 0';
        carre.style.minWidth = `${carreWidth}px`;
        carre.style.maxWidth = `${carreWidth}px`;
        carre.style.backgroundColor = 'white';
        carre.classList.add('square');
        carre.addEventListener('mouseover', changeColor);
        container.appendChild(carre);
    }
}

function changeColor(e){
    switch(mode){
        case 'black':
            e.target.style.backgroundColor = 'black';
            break;
        case 'rainbow':
            const r = Math.floor(Math.random() * 360);
  
            e.target.style.backgroundColor = `hsl(${r}, 100%, 50%)`;
            break;
}}

function generateColor(e) {
    const d = Math.floor(Math.random() * 50);
    e.style.backgroundColor = `hsl(${d}, 100%, 50%)`;
    colorArray.push(d);
}

function resetGrid(){
    const containerToClean = document.getElementById('container');
    while(containerToClean.firstChild){
        containerToClean.removeChild(containerToClean.firstChild);
    }
    
    generateGrid(prompt('taille de la grille?'));
}

function rainbowise(){
    const sortButtonTrigger = document.getElementById("sort");
    sortButtonTrigger.classList.remove("sortHidden");
    const gridToColor = [...document.querySelectorAll(".square")];
    gridToColor.forEach(element => {
        generateColor(element);        
    });
}

function sortGrid() {
    colorArray.sort();
        const unsortedGrid = [...document.querySelectorAll(".square")];
        unsortedGrid.forEach(function (element, index){
            console.log(element);
            element.style.backgroundColor = `hsl(${colorArray[index]}, 100%, 50%)`; 
            console.log(element);

        });
    
}



let mode = 'black';
let colorArray = [];

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGrid);

const blackButton = document.getElementById('black');
blackButton.addEventListener('click', () => mode = 'black');
const rainbowButton = document.getElementById('rainbow');
rainbowButton.addEventListener('click', () => mode = 'rainbow');
const colorButton = document.getElementById('color');
colorButton.addEventListener('click',rainbowise);
const sortButton = document.getElementById('sort');
sortButton.addEventListener('click',sortGrid);





generateGrid(16);
