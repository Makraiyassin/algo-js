const readlineSync = require("readline-sync");
let a = Number (readlineSync.question("write length of your rectangle: "));
let b = Number (readlineSync.question("write width of your rectangle: "));


function calcSurface(a, b) { 
    return a * b;
}

console.log(calcSurface(a,b));
// console.log(calcSurface(4,5));
