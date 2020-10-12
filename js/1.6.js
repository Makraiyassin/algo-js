const readlineSync = require("readline-sync");
let number1 = readlineSync.question("give me a integer");
let number2 = readlineSync.question("give me another integer");
let result = number1%number2;

console.log("the rest of the integer division of the two numbers is "+ result);


