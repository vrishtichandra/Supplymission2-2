var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	packageSprite=createSprite(800/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(800/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(800/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;
	box1=new Box(200,630,100,20);
	

box2=new Box(350,550,100,20);


box3=new Box(500,550,100,20);


packageSprite.x=packageBody.position.x;
packageSprite.y=packageBody.position.y;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	Matter.Body.setStatic( packageBody , false);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  }
box1.display();
box2.display();
box3.display();

  drawSprites();



function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   
  }
}




