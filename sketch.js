var fixedRect,movingRect
var rect1,rect2
var rect3,rect4
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
fixedRect.shapeColor="green"
  movingRect=createSprite(400, 200, 80, 30);
 movingRect.shapeColor="green"
 fixedRect.debug=true
 movingRect.debug=true
 rect1=createSprite(400,100,80,80)
 rect1.shapeColor="yellow"
 rect2=createSprite(400,600,80,80)
 rect2.shapeColor="blue"
 rect1.velocityY=+5
 rect2.velocityY= -5
 rect3=createSprite(100,400,50,50)
 rect3.shapeColor="orange"
 rect4=createSprite(600,400,50,50)
 rect4.shapeColor="pink"
 rect3.velocityX=5
 rect4.velocityX=-5
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX
  movingRect.y=mouseY
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }

  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
  if(rect1.y-rect2.y<rect1.height/2+rect1.height/2
    &&rect2.y-rect1.y<rect1.height/2+rect2.height/2){
      rect1.velocityY=rect1.velocityY*-1
      rect2.velocityY=rect2.velocityY*-1
    }
    if(rect3.x-rect4.x<rect3.width/2+rect4.width/2
      &&rect4.x-rect3.x<rect3.width/2+rect4.width/2){
        rect3.velocityX=rect3.velocityX*-1
        rect4.velocityX=rect4.velocityX*-1
      }
  drawSprites();
}