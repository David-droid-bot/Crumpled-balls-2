class Dustbin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
       // this.image=loadImage("Sprites/dustbingreen.png")

        World.add(world,this.body)
    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    pop();       
    }
};