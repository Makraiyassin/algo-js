class rectangle{
    constructor(topLeftXPos,topLeftYPos, width, length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle){
        if( (this.topLeftXPos+this.width>= otherRectangle.topLeftXPos
             && this.topLeftYPos+this.length>=otherRectangle.topLeftYPos
             && this.topLeftXPos <= otherRectangle.topLeftXPos
             && this.topLeftYPos <= otherRectangle.topLeftYPos)
             || (otherRectangle.topLeftXPos+otherRectangle.width>= this.topLeftXPos
             && otherRectangle.topLeftYPos+otherRectangle.length>=this.topLeftYPos
             && otherRectangle.topLeftYPos <= this.topLeftYPos
             && otherRectangle.topLeftXPos <= this.topLeftXPos)){

        // if ((otherRectangle.topLeftXPos>=this.topLeftXPos && 
        //     otherRectangle.topLeftXPos<=this.topLeftXPos+this.width && 
        //     otherRectangle.topLeftYPos>=this.topLeftYPos && 
        //     otherRectangle.topLeftYPos<=this.topLeftYPos+this.length)||
        //     (this.topLeftXPos>=otherRectangle.topLeftXPos && 
        //     this.topLeftXPos<=otherRectangle.topLeftXPos+otherRectangle.width && 
        //     this.topLeftYPos>=otherRectangle.topLeftYPos && 
        //     this.topLeftYPos<=otherRectangle.topLeftYPos+otherRectangle.length)) {
        return true
        } else{
            return false
        }
    }
}

let MyRectangle =   new rectangle (10,10,5,5);
let YourRectangle = new rectangle (4,4,5,5);//false
let rectangle1 = new rectangle (15,15,5,5);//true
let rectangle2 = new rectangle (25,25,5,5);//false
let rectangle3 = new rectangle (10,10,5,5);//true
let rectangle4 = new rectangle (16,15,5,5);//false
let rectangle5 = new rectangle (15,16,5,5);//false
let rectangle6 = new rectangle (-10,10,5,5);//false
let rectangle7 = new rectangle (5,6,5,5);//false



console.log(MyRectangle);
console.log(YourRectangle);
console.log("collide: "+MyRectangle.collides(YourRectangle));
console.log("collide: "+MyRectangle.collides(rectangle1));
console.log("collide: "+MyRectangle.collides(rectangle2));
console.log("collide: "+MyRectangle.collides(rectangle3));
console.log("collide: "+MyRectangle.collides(rectangle4));
console.log("collide: "+MyRectangle.collides(rectangle5));
console.log("collide: "+MyRectangle.collides(rectangle6));
console.log("collide: "+MyRectangle.collides(rectangle7));


