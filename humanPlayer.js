const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

class HumanPlayer{
    constructor(){
        this.rl = rl;
    }

    getMove(cb){
        rl.question("Where do you want to fire?", answer => {
            cb(answer);
        });
    }
}

module.exports = HumanPlayer
