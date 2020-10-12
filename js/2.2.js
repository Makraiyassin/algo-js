const readlineSync = require("readline-sync");
let min = Number(readlineSync.question("write a number \"min\": "));
let max = Number(readlineSync.question("write a number \"max\": "));
let current = Number(readlineSync.question("write a number \"current\": "));

if(min>max){
    console.log("ERROR!!! you don't understand anything !!!");
} 
else if((current>min) && (current<max)){
    console.log("the current number is between min and max");
} 
else{
    console.log("...");
}