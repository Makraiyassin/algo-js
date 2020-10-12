const readlineSync = require("readline-sync");
let size = readlineSync.question("what's your choes size?");
let birth = readlineSync.question("what's your birth year?");

let result1= size * 2;
let result2= result1 + 5;
let result3= result2 * 50;
let result4= result3 - birth;
let result5= result4 + 1766;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

