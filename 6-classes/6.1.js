class circle{
    constructor (xpos, ypos, radius){
        this.xpos=xpos;
        this.ypos=ypos;
        this.radius=radius;
    }
    get suface(){
        let sur= Math.PI * (this.radius ** 2);
        return  sur;
    }
    get position(){
        let pos=[this.xpos,this.ypos];
        return pos;
    }
    move(xOffset,yOffset){
        this.xpos=xOffset;
        this.ypos=yOffset;
    }
}

let Mycircle = new circle(5,10,5);

console.log(Mycircle.suface);
console.log("le cercle se trouve en: "+Mycircle.position);

Mycircle.move(3,3);

console.log("la cercle s'est déplacer vers: "+Mycircle.position);
