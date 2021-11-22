

function generateGrid(){
    const container = document.getElementById('container');
    const body = document.querySelector("body");
    const bodyWidth = Math.floor(body.offsetWidth*0.75);
    let drawZoneWidth;
    console.log(bodyWidth);
    if (bodyWidth%4 == 0){
        drawZoneWidth = bodyWidth ;
    } else {
        drawZoneWidth = bodyWidth-bodyWidth%4 ;
    }

    container.style.width = `${drawZoneWidth}px`;
    container.style.height = `${drawZoneWidth}px`;

    let carreWidth;

    if (drawZoneWidth%4 == 0){
        carreWidth = drawZoneWidth/4 ;
    } else {
        carreWidth = (drawZoneWidth-(drawZoneWidth%4))/4 ;
    }
    carreWidth += -2;

    for (let i = 1; i <= 16; i++){
        const carre =  document.createElement('div');
        carre.style.border = 'solid 0.1rem black';
        carre.style.flex = '1 0 0';
        carre.style.minWidth = `${carreWidth}px`;
        carre.style.maxWidth = `${carreWidth}px`;
        container.appendChild(carre);
    }
}

generateGrid();