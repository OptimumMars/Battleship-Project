class Board {
    constructor(numRows, numCols, numShips) {
        this.numRows = numRows;
        this.numCols = numCols;
        this.populateGrid(numShips);
        // this.numShips = numShips;
        // this.grid = [numRows * numCols];
    }

    populateGrid(numShips) {
        const grid = [];
        for (let i = 0; i < this.numRows; i++) {
            grid.push(Array(this.numCols).fill(null));
        }
    }
}
