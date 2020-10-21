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
        // if(  this.topLeftXPos+this.width>= otherRectangle.topLeftXPos
        //      && this.topLeftYPos+this.length>=otherRectangle.topLeftYPos
        //      && this.topLeftXPos <= otherRectangle.topLeftXPos
        //      && this.topLeftYPos <= otherRectangle.topLeftYPos
        //      || otherRectangle.topLeftXPos+otherRectangle.width>= this.topLeftXPos
        //      && otherRectangle.topLeftYPos+otherRectangle.length>=this.topLeftYPos
        //      && otherRectangle.topLeftYPos <= this.topLeftYPos
        //      && otherRectangle.topLeftXPos <= this.topLeftXPos
        //      ){
        return true
        } else{
            return false
        }
    }
}
//__________________________________________________________________________________________
//TEST
//__________________________________________________________________________________________ 

let MyRectangle =   new rectangle (10,10,5,5);
let YourRectangle = new rectangle (6,7,5,5);
let rectangle1 = new rectangle (15,15,5,5);//true
let rectangle2 = new rectangle (25,25,5,5);//false
let rectangle3 = new rectangle (10,10,5,5);//true
let rectangle4 = new rectangle (16,15,5,5);//false
let rectangle5 = new rectangle (15,16,5,5);//false
let rectangle6 = new rectangle (-10,10,5,5);//false
let rectangle7 = new rectangle (4,5,5,5);//true

console.log("collide: "+MyRectangle.collides(YourRectangle));
console.log("collide: "+MyRectangle.collides(rectangle1));
console.log("collide: "+MyRectangle.collides(rectangle2));
console.log("collide: "+MyRectangle.collides(rectangle3));
console.log("collide: "+MyRectangle.collides(rectangle4));
console.log("collide: "+MyRectangle.collides(rectangle5));
console.log("collide: "+MyRectangle.collides(rectangle6));
console.log("collide: "+MyRectangle.collides(rectangle7));

//__________________________________________________________________________________________
// TEST 6.3
//__________________________________________________________________________________________
// let MyRectangle =   new rectangle (68,1,14,10); 
// let YourRectangle = new rectangle (54,23,52,21); 
// let rectangle1 = new rectangle (56,0,74,45); 
// let rectangle2 = new rectangle (16,76,90,29); 
// let rectangle3 = new rectangle (63,26,88,45);

// console.log(MyRectangle);
// console.log(YourRectangle);
// console.log(rectangle1);
// console.log(rectangle2);
// console.log(rectangle3);
// console.log("collide: "+MyRectangle.collides(rectangle3));
// console.log("collide: "+YourRectangle.collides(rectangle3));
// console.log("collide: "+rectangle1.collides(rectangle3));
// console.log("collide: "+rectangle2.collides(rectangle3));

