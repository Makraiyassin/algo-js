const readlineSync = require("readline-sync");

let name = readlineSync.question("what is the name of your favorite series? ");
let year = readlineSync.question("when was it produced? ");
let n = Number (readlineSync.question("how many actor names in this series do you know? "));
let actors = []

function askTvSerie(){
    for(let i=0; i<n; i++){
        actors.push(readlineSync.question("write the name of an actor: "));
    }
    let object = { 
        "name" : name,
        "year" : year,
        "actors" : actors,
    }
    return object
}
// console.log(JSON.stringify(askTvSerie(),null,5));
console.log(askTvSerie());