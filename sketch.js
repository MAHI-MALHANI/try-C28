const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(990,130,30);
	mango3=new mango(1300,50,30);
	mango4=new mango(1000,75,30);
	mango5=new mango(800,115,30);
	mango6=new mango(500,150,30);
	mango7=new mango(650,95,30);
	mango8=new mango(775,125,30);
	mango9=new mango(900,50,30);
	mango10=new mango(1120,40,30);

	stoneObj=new stone(stone.body, {x:100, y:170});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();

  boy.display();

  detechCollision(stoneObj, mango1);
  detechCollision(stoneObj, mango2);
  detechCollision(stoneObj, mango3);
  detechCollision(stoneObj, mango4);
  detechCollision(stoneObj, mango5);
  detechCollision(stoneObj, mango6);
  detechCollision(stoneObj, mango7);
  detechCollision(stoneObj, mango8);
  detechCollision(stoneObj, mango9);
  detechCollision(stoneObj, mango10);


  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    stoneObj.fly();
}


function detectCollision(stone,mango){
  mangoBodyPosition=mango.body.position;
  stoneBodyPosition=stone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if(distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body, false);
  }
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body, {x:100, y:170});
    launcherObject.attach(stoneObj.body);
  }
}
