const readlineSync = require("readline-sync");
let n = Number (readlineSync.question("enter a number between 1 and 10: "));
let sum = 0;

// let i = 1;
// while (i <= n) {
//   let x=(Number (readlineSync.question("enter another number: ")));
//   sum = sum + x
//   i ++;
// }

for(let i=1; i<= n; i++){
    let x=(Number (readlineSync.question("enter another number: ")));
    sum = sum + x
}

console.log( "la somme de tous chiffres est: "+sum);
