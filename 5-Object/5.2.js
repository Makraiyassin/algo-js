
const readlineSync = require("readline-sync");

let name = readlineSync.question("what is the name of your favorite series? ");
let year = readlineSync.question("when was it produced? ");
let n = Number (readlineSync.question("how many actor names in this series do you know? "));
let actors = []


function askTvSerie(){
    for(let i=0; i<n; i++){
        actors.push(readlineSync.question("write the name of an actor: "));
    }

    let object = { 
        "name" : name,
        "year" : year,
        "actors" : actors,
    }
    return object
}

function randomizeCast(tvSerie){
    for(let i = 0; i < tvSerie.actors.length-1; i++) {
		const random = Math.floor(Math.random()*i);
		const x = tvSerie.actors[i];

		tvSerie.actors[i] = tvSerie.actors[random];
		tvSerie.actors[random] = x;
	}

	return tvSerie;

}

console.log(randomizeCast(askTvSerie()));


// let random1 = Math.floor(Math.random()*1);
// let random2 = Math.floor(Math.random()*2);
// let random3 = Math.floor(Math.random()*3);
// let random4 = Math.floor(Math.random()*4);
// let random5 = Math.floor(Math.random()*5);

// console.log(random1);
// console.log(random2);
// console.log(random3);
// console.log(random4);
// console.log(random5);

