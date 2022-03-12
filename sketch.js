const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball,ball2,ball3;
var ground;
var con,con2,con3;
var joint;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  
  world = engine.world;

  joint = new Ground(300,20,20,20);

  var ball_options = {
    restitution: 0.8
  }
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(350,10,13,ball_options);
  World.add(world,ball2);

  ball3 =Bodies.circle(500,40,15,ball_options);
  World.add(world,ball3);

  con = Matter.Constraint.create({
   pointA:{x:300,y:20},
   bodyB:ball,
   pointB:{x:0,y:0},
   length:100,
   stiffness:0.1
  });
  
  World.add(world,con);

  con2 = Matter.Constraint.create({
   bodyA:ball,
   pointA:{x:0,y:0},
   bodyB:ball2,
   pointB:{x:0,y:0},
   length:100,
   stiffness:0.1
  });

  World.add(world,con2);

  con3 = Matter.Constraint.create({
    bodyA:ball2,
    pointA:{x:0,y:0},
    bodyB:ball3,
    pointB:{x:0,y:0},
    length:120,
    stiffness:0.1
  })

  World.add(world,con3);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,13);
  ellipse(ball3.position.x,ball3.position.y,15);
  joint.show();

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  line(ball2.position.x,ball2.position.y,ball3.position.x,ball3.position.y);
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0});
    }
}

