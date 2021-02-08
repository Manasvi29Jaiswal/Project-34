class Hero{
  constructor(x,y,radius){
  
  var options={
    frictionAir:1,
    density:1

  }
  
  this.body=Bodies.circle(x,y,radius,options)
  this.radius=radius;
  this.image=loadImage("Superhero-01.png")
  World.add(world,this.body)
  
  }
  
  display(){
  var pos=this.body.position
  //var angle=this.body.angle;
  push ()
  //translate (this.body.position.x,this.body.position.y);
  //rotate(angle);
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,this.radius,this.radius)
  pop ()
  
  
  }
  
}
