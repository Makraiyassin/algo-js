const readlineSync = require("readline-sync");
let n = Number (readlineSync.question("enter a number between 1 and 10: "));


function rand10(){ 
    return Math.floor(Math.random()*11);
}
function multiRand(n){
    let arr = [];
    for(i=0; i<n; i++){
        let x = rand10();
        arr[i] = x;
    }
    return arr;
}

console.log(multiRand(n));

