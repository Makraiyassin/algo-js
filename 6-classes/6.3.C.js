class Rectangle{

    constructor(width, lenght, topLeftXPos, topLeftYPos){
        this.width=width;
        this.lenght=lenght;
        this.posTopLeftX=topLeftXPos;
        this.posTopLeftY=topLeftYPos;


    }

    collides(rectangle2){

        if(this.posTopLeftX <= (rectangle2.posTopLeftX + rectangle2.width)&&
        (this.posTopLeftX + this.width) >= rectangle2.posTopLeftX &&
        this.posTopLeftY <= (rectangle2.posTopLeftY + rectangle2.lenght)&&
        (this.posTopLeftY + this.lenght) >= rectangle2.posTopLeftY)

        {
            return true;
        }else{ return false }
}}

let rectangles = [];
let collision =[];
let pasDeCollision = [];
let newrect;
let collide;

// const RandomRectangle =(nbRect) => {
   
//     let randomWidth = (Math.floor(Math.random() * 9) + 1)*10;
//     let randomLenght = (Math.floor(Math.random() * 9) + 1)*10;
//     let randomPosX = (Math.floor(Math.random() * 9) + 1)*100;
//     let randomPosY = (Math.floor(Math.random() * 9) + 1)*100;

//     for(let x=0; x < nbRect; x++){
//         newrect = new Rectangle (randomWidth,randomLenght,randomPosX,randomPosY);
//         rectangles.push(newrect);
//     }
// };
function RandomRectangle(nbRect){
   
    let randomWidth = Math.floor(Math.random()*10);
    let randomLenght = Math.floor(Math.random()*10);
    let randomPosX = Math.floor(Math.random()*100);
    let randomPosY = Math.floor(Math.random()*100);

    for(let x=0; x < nbRect; x++){
        newrect = new Rectangle (randomWidth,randomLenght,randomPosX,randomPosY);
        rectangles.push(newrect);
    }
    return rectangles
};


// const verification = () => {
//     if(arr.lenght===1){
//     }else{
//         collide=array[index-1].collides(array[index]);
//         if(collide===true){
//         console.log(array[index])
//         collision.push(element);
//             }else{console.log("Ca ne fonctionne pas")}           
//     }
// }

const verification = () => {
    if(arr.lenght===1){
        collide=array[index-1].collides(array[index]);
    } else if(collide===true){
        console.log(array[index])
        collision.push(element);
    } else{
        console.log("Ca ne fonctionne pas")           
    }
}

console.log(RandomRectangle(5));

// j'ai corriger quelques truc dans ton code, j'ai mi en commentaire ce que tu as écris 
// et juste en dessous comment tu aurais du l'écrire, en esperant que ça puisse t'aider...
// au final ça ne fonctionne pas, mais j'espere aumoins que ça te donne une idée sur comment t'y prendre ^^
