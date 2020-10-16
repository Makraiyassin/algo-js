class rectangle{
    constructor(topLeftXPos,topLeftYPos, width, length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle){
        if(otherRectangle.topLeftXPos<=this.topLeftXPos+this.width || otherRectangle.topLeftYPos<=this.topLeftYPos+this.lenght
            /*|| otherRectangle.topLeftXPos+otherRectangle.width>= this.topLeftXPos ||  otherRectangle.topLeftYPos+otherRectangle.lenght>= this.topLeftYPos*/){
            return true
        } else{
            return false
        }
    }
}

let MyRectangle = new rectangle (1,1,3,3);
let YourRectangle = new rectangle (5,5,3,3);

console.log(MyRectangle);
console.log(YourRectangle);
console.log(MyRectangle.collides(YourRectangle));