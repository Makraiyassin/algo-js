class rectangle{
    constructor(topLeftXPos,topLeftYPos, width, length){
        this.topLeftXPos=topLeftXPos;
        this.topLeftYPos=topLeftYPos;
        this.width=width;
        this.length=length;
    }
    collides(otherRectangle){
        if( (this.topLeftXPos+this.width>= otherRectangle.topLeftXPos && this.topLeftYPos+this.length>=otherRectangle.topLeftYPos)
            ||(otherRectangle.topLeftXPos+otherRectangle.width>= this.topLeftXPos && otherRectangle.topLeftYPos+otherRectangle.length>=this.topLeftYPos)
            ){
            return true
        } else{
            return false
        }
    }
}

let MyRectangle = new rectangle ()


console.log("collide: "+Rectangle.collides());