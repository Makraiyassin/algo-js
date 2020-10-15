const readlineSync = require("readline-sync");

let name = readlineSync.question("what is the name of your favorite series? ");
let year = readlineSync.question("in what year was it produced? ");
let actors = readlineSync.question("what are the names of the actors in this series? ");

function askTvSerie(){
    let object={ 
        "name" : name,
        "year" : year,
        "actors" : actors,
    }
    return object
}
console.log(askTvSerie());