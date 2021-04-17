const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var train1,train2,train3;
var chain1,chain2;
var rock1;
var trainSound 
var crashSound
var flag = 0;
var crash;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  train1 = new Train(300,300,50,75)
  train2 = new Train(200,300,50,75)
  train3 = new Train(100,300,50,75)

  rock1 = new Rock(1000,370,300,200)

  chain1 = new Chain(train1.body,train2.body)
  chain2 = new Chain(train2.body,train3.body)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  train1.show()
  train2.show()
  train3.show()
  rock1.show()
  chain1.show()
  chain2.show()
  var collision = Matter.SAT.collides(train1.body, rock1.body) 
  if(collision.collided){
    flag = 1
  }
  if(flag === 1){
    textSize(15)
    text("crash",200,200)
    //crashSound.play()
  }
}
function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    //trainSound.play()
    Matter.Body.applyForce(train1.body, {x: train1.body.position.x, y: train1.body.position.y}, {x: 0.5, y: 0})
  }
}