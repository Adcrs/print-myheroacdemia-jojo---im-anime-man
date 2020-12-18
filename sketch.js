
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side0,side1,side2;
var dustbon;
function preload(){
  dust  =  loadImage("jjba.png");
  carpt =  loadImage("LOLOLOL.png");
}

function setup() {
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;
dustbon =  createSprite(630,620,20,100);
dustbon.addImage(dust);
dustbon.scale = 0.4
	 paper = new Paper(100, 400, 60);

     ground = new Ground(400, 680, 800, 20);
     
	 side0 = new Dustbin(600, 620, 20, 100);
     side1 = new Dustbin(650, 660, 65, 20);
     side2 = new Dustbin(670, 620, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  side0.display();
  side1.display();
  side2.display();
dustbon.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:200, y: -200})
	}

  }