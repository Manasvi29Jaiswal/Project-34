const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var hero, rope
var box21,box22,box23,box24,box25,box26;
var backgroundImage;
var monster;

function preload(){
  backgroundImage=loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(470, 450, 950, 20);

  box1 = new Box(580, 100, 50, 50);
  box2 = new Box(660, 100, 50, 50);
  box3 = new Box(660, 100, 50, 50);
  box4 = new Box(660, 100, 50, 50);
  box5 = new Box(660, 100, 50, 50);
  box6 = new Box(660, 100, 50, 50);
  box7 = new Box(580, 100, 50, 50);
  box8 = new Box(580, 100, 50, 50);
  box9 = new Box(580, 100, 50, 50);
  box10 = new Box(580, 100, 50, 50);
  box11 = new Box(580, 100, 50, 50);
  box12 = new Box(580, 100, 50, 50);
  box13 = new Box(500, 100, 50, 50);
  box14 = new Box(500, 100, 50, 50);
  box15 = new Box(500, 100, 50, 50);
  box16 = new Box(500, 100, 50, 50);
  box17 = new Box(500, 100, 50, 50);
  box18 = new Box(500, 100, 50, 50);
  box19 = new Box(500, 100, 50, 50);
  box20 = new Box(500, 100, 50, 50);
  box21 = new Box(660, 100, 50, 50);
  box22 = new Box(740, 100, 50, 50);
  box23 = new Box(740, 100, 50, 50);
  box24 = new Box(740, 100, 50, 50);
  box25 = new Box(740, 100, 50, 50);
  box26 = new Box(740, 100, 50, 50);
  

  hero = new Hero(200, 200, 200);
  rope = new Rope(hero.body, { x: 300, y: 50 });
  monster = new Monster(1000,300,200,200);

}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  

  hero.display();
  rope.display()
  monster.display();

  detectCollision(monster,box1)
  detectCollision(monster,box2)
  detectCollision(monster,box3)
  detectCollision(monster,box4)
  detectCollision(monster,box5)
  detectCollision(monster,box6)
  detectCollision(monster,box7)
  detectCollision(monster,box8)
  detectCollision(monster,box9)
  detectCollision(monster,box10)
  detectCollision(monster,box11)
  detectCollision(monster,box12)
  detectCollision(monster,box13)
  detectCollision(monster,box14)
  detectCollision(monster,box15)
  detectCollision(monster,box16)
  detectCollision(monster,box17)
  detectCollision(monster,box18)
  detectCollision(monster,box19)
  detectCollision(monster,box20)
  detectCollision(monster,box21)
  detectCollision(monster,box22)
  detectCollision(monster,box23)
  detectCollision(monster,box24)
  detectCollision(monster,box25)
  detectCollision(monster,box26)

}


function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}






function detectCollision(Lmonster,Lbox){

  monsterBodyPosition=Lmonster.body.position
  boxBodyPosition=Lbox.body.position
  
  var distance=dist(monsterBodyPosition.x,monsterBodyPosition.y,boxBodyPosition.x,boxBodyPosition.y)
  
  if(distance <= Lmonster.width + Lbox.width){
  
      Matter.Body.setStatic(Lmonster.body,false)
  }
  
  if(distance <= Lmonster.height + Lbox.height){
  
      Matter.Body.setStatic(Lmonster.body,false)
  }
  
     
  }

