class Box{
var options={
       restitution: 1;
   }
    this.body=Bodies.rectangle(200,100,50,50,options)
    World.add(world.this.body);
}
display(){
var pos=this.body.position;
rectMode(CENTER);
Fill(225)
rect(pos.x,pos.y,this.Width,this.height)
}