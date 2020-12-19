var a,b;


function setup() {
  createCanvas(800,800);
  a=createSprite(400, 200, 50, 50);
 b=createSprite(500,300,50,70)
 a.shapeColor="green"
 b.shapeColor="green"

}

function draw() {
  background("black"); 

  b.x=World.mouseX
  b.y=World.mouseY 
  if(b.x-a.x<a.width/2+b.width/2&&a.x-b.x<a.width/2+b.width/2&&a.y-b.y<a.height/2+b.height/2&&b.y-a.y<a.height/2+b.height/2){
    a.shapeColor="red"
   b.shapeColor="red"
   

  }
  else{
    a.shapeColor="green"
    b.shapeColor="green"
   
  }
  drawSprites();
}
