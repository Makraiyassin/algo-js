const readlineSync = require("readline-sync");

function rand(){ 
    return Math.floor(Math.random()*100)+1;
}
//_____________________________________________________________________
//faire une boucle

let n = Number(readlineSync.question("Guess the number: "));
if(n<rand()){
    console.log("Too low! ");
}else if (n>rand()){
    console.log("Too high! ");
}else{
    console.log("Well guessed! ");
}

