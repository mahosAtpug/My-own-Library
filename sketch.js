var movingRect,fixedRect,gameObject,obj1,obj2;



function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,100,100,100);
  fixedRect=createSprite(100,100,100,100);
  gameObject=createSprite(250,100,100,100);
  obj2=createSprite(100,150,100,100)
  obj1=createSprite(100,360,100,100);
  obj1.velocityY=-5;
  obj2.velocityY=5;
}

function draw() {
  background("yellow");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
 
  drawSprites();
  bounceOff(obj1,obj2);
if (isTouching(movingRect,gameObject)){
  movingRect.shapeColor="red";
  gameObject.shapeColor="blue";
}
else {
    movingRect.shapeColor="green";
    gameObject.shapeColor="black";
}
}
