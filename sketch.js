var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wall1,wall2,wall3
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1=createSprite(300, 610,20,100);
	wall1.shapeColor=color("red")

	wall2=createSprite(500, 610,20,100);
	wall2.shapeColor=color("red")

	wall3=createSprite(400, 650,200,20);
	wall3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall3 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall2 = Bodies.rectangle(500, 610, 100, 20 , {isStatic:true} );
	 World.add(world, ground);

	 wall1 = Bodies.rectangle(300, 610, 100, 20 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(isTouching(packageBody,wall3)){
	Matter.Body.setStatic(packageSprite,false);


  }

  drawSprites();
 
}


function keyPressed() { 
	if (keyCode === LEFT_ARROW) { 
	helicopterSprite.x=helicopterSprite.x-20;
	 translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
	 }
	  else if (keyCode === RIGHT_ARROW) { 
		  helicopterSprite.x=helicopterSprite.x+20;
		   translation={x:20,y:0}
		    Matter.Body.translate(packageBody, translation) 
		} 
		else if (keyCode === DOWN_ARROW) { 
			Matter.Body.setStatic(packageBody,false);
		 } 
		}
		function isTouching(object1,object2){
			if (object1.x - object2.x < object2.width/2 + object1.width/2
			  && object2.x - object1.x < object2.width/2 + object1.width/2
			  && object1.y - object2.y < object2.height/2 + object1.height/2
			  && object2.y - object2.y < object2.height/2 + object1.height/2) {
			  
			  return true;
			}
			else {
			  return false;
			} 
		  }

