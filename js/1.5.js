const readlineSync = require("readline-sync");
let number1 = readlineSync.question("give me a number with decimal");
let number2 = readlineSync.question("give me a other number with decimal");
let result = Math.round(number1)*number2

console.log(result);