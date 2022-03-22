function createSquares(number){
    const totalSquaresNumber = number * number;
    const squareSize = 1250 / totalSquaresNumber;

    //Changes grid-template-column property according to the grid size
    let autoAmount = '';
    for(i=0;i<number;i++){
        autoAmount += 'auto ';
    }
    container.style.gridTemplateColumns = autoAmount;

    //Adds Squares to container
    for(i=0;i<totalSquaresNumber;i++){
        
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.padding = (squareSize/4)+"px";
        container.appendChild(square); 

        //Changes background-color when a square is hovered
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'black';
        });
    }
}

const container = document.querySelector(".container");
const btnChange = document.querySelector("#btn-change");
const btnClear = document.querySelector("#btn-clear");

createSquares(16);


btnChange.addEventListener('click', function(){
    let newSize = 0;

    container.innerHTML = '';
    newSize = window.prompt('Enter amount of squares per row: (Max amount: 100. Min amount: 2)');
    while(newSize > 100 || newSize < 2){
        newSize = window.prompt('Enter amount of squares per row: (Max amount: 100. Min amount: 2)');
    }
    createSquares(newSize);
});

btnClear.addEventListener('click', function(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = 'cornsilk';
    });
});



