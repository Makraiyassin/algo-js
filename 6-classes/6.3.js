// GENERER UN CHIFFRE RANDOM ENTRE 1 & 100

function rand(){ 
    return Math.floor(Math.random()*100)+1;
}

// CREE UN ARRAY DE 4 CHIFFRES RANDOM ENTRE 1 & 100

// function multiRand(){
//     let arr = [];
//     for(i=0; i<4; i++){
//         let x = rand10();
//         arr[i] = x;
//     }
// 	return arr;
// }

// let random;


class rectangle{
    constructor(topLeftXPos,topLeftYPos, width, length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle){
        if(  this.topLeftXPos+this.width>= otherRectangle.topLeftXPos
            && this.topLeftYPos+this.length>=otherRectangle.topLeftYPos
            && otherRectangle.topLeftXPos+otherRectangle.width>= this.topLeftXPos
            && otherRectangle.topLeftYPos+otherRectangle.length>=this.topLeftYPos
            ){
        return true
        } else{
            return false
        }
    }
}

let rectangle2=[];

for(let i = 0; i<5 ; i++){

    // PREMIERE MANIERE: 
	// random = multiRand();
    // otherRectangle[i] = new rectangle (random[0],random[1],random[2],random[3]);

    // DEUXIEME MANIERE:
    // otherRectangle[i] = new rectangle (rand10(),rand10(),rand10(),rand10());

    // TROISIEME MANIERE:
    // otherRectangle[i] = new rectangle (Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100));
    
    rectangle2.push(new rectangle (rand(),rand(),rand(),rand()));

    console.log(rectangle2);
    
	for (let j=0; j<i;j++){
        console.log("collide rectangle "+j+" with last rectangle: "+rectangle2[i].collides(rectangle2[j]));
    }
}

// otherRectangle.forEach(otherRectangle[i].collide(otherRectangle[i+1]));  

