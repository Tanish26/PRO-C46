var cop;
var corona;
var human1, human2, human3, human4, human5;
var cop1, cop2, cop3, cop4, cop5, cop6, cop7; 
var bg;


function preload(){
  co1 = loadImage("co1.png");
  cop1 = loadAnimation("Cop1.jpeg", "Cop2.jpeg", "Cop3.jpeg", "Cop4.jpeg", "Cop5.jpeg", "Cop6.jpeg");
  bg = loadImage("city-background.png");
}

function setup() {
  createCanvas(900, 500);
  bg1 = createSprite(500,100,1000,500);
  bg1.addImage("bg1", bg);
  bg1.x = bg1.width /2;
  bg1.scale=2.5;
  bg1.velocityX=-1;
  cop = createSprite(100, 150);
  human1 = createSprite();
  human2 = createSprite();
  human3 = createSprite();
  human4 = createSprite();
  human5 = createSprite();
  //cop.addAnimation("cop1", cop1);
}

function draw() {  
  if (bg1.x < 0){
    bg1.x = bg1.width/2;
  }
  

  if(keyIsDown(UP_ARROW) && cop.index !== null){
    cop.distance +=50
  }
  coronaSpawn();
  drawSprites();
}

function coronaSpawn(){
  if (frameCount%60 === 0){
  for(var i=10; i<=900;i=i+250){
  corona = createSprite(i, 200);
  corona.velocityX = 2;
  corona.velocityY = 2;
  corona.addAnimation("co1", co1);
  corona.scale = 0.1;
}
}
}