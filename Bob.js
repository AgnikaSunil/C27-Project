class Bob{
    constructor(x,y){
        var options = {
            frictionAir :0
        }
        this.body =Bodies.circle(x,y,17,options);
        this.width =35;
        this.image =loadImage("Images/bobImg.png");
        World.add(world, this.body);
    }
    
    display(height){
        var pos = this.body.position;
        this.height = height;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}