// GENERER UN CHIFFRE RANDOM ENTRE 1 & 10

function rand10(){ 
    return Math.floor(Math.random()*100);
}

// CREE UN ARRAY DE 4 CHIFFRES RANDOM ENTRE 1 & 10

function multiRand(){
    let arr = [];
    for(i=0; i<4; i++){
        let x = rand10();
        arr[i] = x;
    }
	return arr;
}

let random;


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

let otherRectangle=[];

for(let i = 0; i<10 ; i++){
	random = multiRand();
	otherRectangle[i] = new rectangle (random[0],random[1],random[2],random[3]);
	console.log(otherRectangle);
	for (let j=1; j<=i;j++){
        console.log(otherRectangle[i].collides(otherRectangle[i-j]));
    }
}

// random = multiRand();
// let MyRectangle = new rectangle (random[0],random[1],random[2],random[3]);
// console.log(MyRectangle);



