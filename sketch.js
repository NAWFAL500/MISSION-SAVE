var cop , pack;



function preload(){
  
  cop=loadImage("helicopter.png")
  pack = loadImage("package.png")
}


function setup(){
  createCanvas(400,400)
  
  heli = createSprite(200,60,10,10);
  heli.addImage(cop)
  heli.scale=0.5;
  
  packGroup = createGroup();
  groundGroup = createGroup();
  
  
  
  ground = createSprite(1,370,1000,10);
  groundGroup.add(ground)
  
}


function draw(){
  
  
  
  
  background  ("white")
  text("PRESS SPACE",200,200);
  
  if(keyDown("space")){
    
    createPackage();
    ground.velocityX=-3;
      
  }
  
  if(ground.x < 0){
      
      ground.x = ground.width/2;  
    }
  
  
  packGroup.collide(groundGroup)
  
  drawSprites();
}

function createPackage() {
  var PACKU= createSprite(50,60,10,10);
  PACKU.addImage(pack);
  PACKU.x = 360;
  PACKU.x=heli.x;
  PACKU.velocityY=y = 4;
  PACKU.lifetime = 100;
  PACKU.scale = 0.3;
  packGroup.add(PACKU)
}











