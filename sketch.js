
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball,ground1,dustbin;
function preload()
{
//	dustbin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Paper(100,180,40);
    dustbin= new Dustbin (600,750,20,100);
	groundSprite=createSprite(600,650,20,100);
	groundSprite.shapeColor=color(255,0,0);

	ground1=new Ground(400,690,800,20);

	groundSprite=createSprite(500,690,20,100);
	groundSprite.shapeColor=color(255,0,0);
   // groundSprite.addImage(dustbin);
	groundSprite=createSprite(510,650,20,100);
	groundSprite.shapeColor=color(255,0,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  ball.display();
  ground1.display();
  dustbin.display();
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50});
	

	}
}


