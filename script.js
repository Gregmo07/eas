

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
    e.target.style.backgroundColor = 'black';
}

function resetGrid(){
    const containerToClean = document.getElementById('container');
    while(containerToClean.firstChild){
        containerToClean.removeChild(containerToClean.firstChild);
    }
    
    generateGrid(prompt('taille de la grille?'));
}
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGrid);
generateGrid(10);
