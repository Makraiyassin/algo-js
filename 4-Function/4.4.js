const readlineSync = require("readline-sync");
let n = Number (readlineSync.question("enter a number between 1 and 10: "));
let sum = 0;
let arr = [];


function rand10(){ 
    return Math.floor(Math.random()*10)+1;
}

function multiRand(n){
    arr = [];
    for(i=0; i<n; i++){
        let x = rand10();
        arr[i] = x;
    }
    return arr;
}

function average(arr){
    for (let i = 0; i < arr.length; i ++) {
        sum = sum + arr[i];
      }
      return sum/arr.length;
}

function min(arr){
    return Math.min(...arr);
}

function max(arr){
    return Math.max(...arr);
}


console.log("array with random numbers: ", multiRand(n));
console.log("the average number of the array with random numbers is: ",average(arr));
console.log("the smallest number of the array with random numbers is: ",min(arr));
console.log("the biggest average number of the array with random numbers is: ",max(arr));



// let add3 = n+3;
// console.log(add3);
