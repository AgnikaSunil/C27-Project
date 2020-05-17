class Roof{
    constructor(){
       var options = {
           isStatic :true
       }
       this.body = Bodies.rectangle(495,200,180,15,options);
       this.width = 180;
       this.height = 15;
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("#0000CC");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
      }
}