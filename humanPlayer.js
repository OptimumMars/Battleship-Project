const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

class HumanPlayer{
    constructor(){
        this.rl = rl;
    }

    getMove(cb){
        rl.question("Enter a row# and a column# EX: 2 3", answer => {
            cb(convertInput(answer));
        });
    }

    convertInput(ans) {
        let ansArray = ans.split(" ");
        return ansArray.map(ele => {
            ele = parseInt(ele);
        })
    }
}

module.exports = HumanPlayer
