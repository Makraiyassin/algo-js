const readlineSync = require("readline-sync");
let favorite = readlineSync.question("What's your favorite number? ");
console.log(favorite);
while(favorite != 42){
    console.log("Are you sure? ");
    favorite = readlineSync.question("What's your favorite number?  ");
}