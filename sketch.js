var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var ball;
var ground;
var dustbin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic:false,
	restitution,
	friction=0.5,
	density=1.2

}
}
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new ball(200,100,50,50);
	ground= new ground(800,200,50,50);
	dustbin= new dustbin(300,100,20,20);
	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
  background(0);
  
ball.display();
ground.display();
dustbin.display();



 
}



