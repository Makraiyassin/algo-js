const readlineSync = require("readline-sync");

let surname = readlineSync.question("what's your surname? ");
let firstname = readlineSync.question("what's your firstname? ");
let name = surname + " , " + firstname

function reverse(a,b){
    name =  b + " , " + a
    return name
}

console.log(name);
console.log(reverse(surname,firstname));