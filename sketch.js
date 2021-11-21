
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var down;
var engine;
var world;
var grounObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  fill("yellow");
  engine = Engine.create();
  world = engine.world;

  grounObj = new Ground(width/2,670,width,20);
  leftSide = new Ground(500,600,20,120)
  rightSide = new Ground(700,600,20,120);
	//Create the Bodies Here.
  var ball_options={
	  restitution:0.3,
	  density:1.2,
	  friction:0,
	  isStatic:false,
  }
  ball = Bodies.circle(200,200,20,ball_options)
  World.add(world,ball)

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);
  grounObj.display();
  leftSide.display();
  rightSide.display();
 
 ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}

function keyPressed(){
 if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:-9})
 }
}

