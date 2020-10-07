const HumanPlayer = require("./humanPlayer.js");

//gets a random index on the grid --
function randomIndex(array) {
    let rowIndex = Math.floor(Math.random() * array.length);

    let columnLength = array[0].length

    let columnIndex = Math.floor(Math.random() * columnLength);

    let row = array[rowIndex]

    row[columnIndex] = 'S'

    return;
}

class Board {
    constructor(numRows, numCols, numShips) {
        this.numRows = numRows;
        this.numCols = numCols;
        this.grid = []
        this.populateGrid(numShips);
    }

    populateGrid(numShips) {
        for (let i = 0; i < this.numRows; i++) {
            this.grid.push(Array(this.numCols).fill(null));
        }

        //insert ships --
        for (let i = 0; i < numShips; i++) {
            let shipSpot = randomIndex(this.grid);
        }

    }

    shipsLeft(){
        let counter = 0
        for (let i = 0; i < this.numRows; i++){
            let rowIndex = this.grid[i];

            for (let j = 0; j < this.numCols; j++){
                let columnIndex = rowIndex[j]

                if (columnIndex === "S"){
                    counter++;
                }
            }
        }
        return counter;
    }

    isValid() {
        if (columnIndex !== "X" || columnIndex !== "*") {
            return false;
        }
        return true;
    }

    checkGameOver() {
        if (this.shipsLeft() === 0) {
            console.log("You Win!!!");
            return true;
        }
        return false;
    }

    firing (input) {
        let rowIndex = input[0];
        let columnIndex = rowIndex[input[1]];
        if (this.isValid() === true) {
            if (columnIndex === "S") {
                columnIndex = "X";
            } else {
                columnIndex = "*";
            }
        } else {
            console.log("Not a valid move! >:(")
        }
        this.checkGameOver();
    }

}

let newBoard = new Board(4, 4, 2);

console.log(newBoard);
