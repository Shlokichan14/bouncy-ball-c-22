const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

engine = Engine.create();

// my world is my engine's world

world = engine.world;

Engine.run(engine);

var ground_options = {
  isStatic : true,
}

ground = Bodies.rectangle(200,380,400,10,ground_options);

World.add(world,ground);

var ball_options = {
restitution : 1, 
}

ball = Bodies.circle(200,100,20,ball_options);

World.add(world,ball);

console.log(ball);


console.log(ground);
}

function draw() {
  background(255,255,255);  
 // drawSprites();  

 rectMode(CENTER);

 rect(ground.position.x,ground.position.y,400,10);

 ellipseMode(RADIUS);

 ellipse(ball.position.x,ball.position.y,20);
}