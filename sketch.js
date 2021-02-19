var fr,mr;


function setup() {
  createCanvas(800,400);
 fr = createSprite(400, 200, 200, 50);
 fr.shapeColor = "red" 
 mr = createSprite(400, 200, 200, 50);
 mr.shapeColor = "red" 
}


function draw() {
  background("blue");  
  mr.x=World.mouseX
  mr.y=World.mouseY

  if(mr.x - fr.x < fr.width/2+mr.width/2 ){
  fr.shapeColor = "pink"
  mr.shapeColor = "pink"
  }
  else{
  fr.shapeColor = "red"
  mr.shapeColor = "red"
  }
  drawSprites();

}