//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//variables
var dustbinObj,groundObject;
var world, paperObj;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//creating paper object
	paperObj = new Paper(200,450,70);
	
	//update engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  //display bodies
  paperObj.display();
  groundObject.display();
  dustbinObj.display();

  

}

//when up key is pressed the paper should fly in the dustbin
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145});

  
	}
}