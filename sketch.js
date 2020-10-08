//var PLAY = 1;
//var END = 0;
//var gameState = PLAY;


var survivalTime=0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,ground;

function preload(){
  
   ground = loadImage("download (1).jpg");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  monkey=createSprite(90,240,35,35);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.15
  
  ground = createSprite(400,260,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  score=0;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
 background("white");
  textSize(28);
  fill("black");
   text("survival time "+ score, 240,40);
  
   score = score + Math.round(getFrameRate()/60);
  
   //if(gameState==="play"){
 if(ground.x<200){ 
  ground.x=ground.width/2;
 }
  
  if(keyDown("space")&& monkey.y >= 200){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
   
 // if(monkey.isTouching(obstacle)){
       
    // }


 // else if (gameState === END) {
 // banana.destroy();
 // obstacle.destroy();
    
  //}  
  drawSprites();
  food();
  obstacles();
}

function food(){
  if (frameCount % 150 === 0){
   var banana = createSprite(600,80,10,40);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-7;
    banana.lifeTime=300;
    FoodGroup.add(banana);
  }
}

function obstacles(){
 if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,240,40,10);
    obstacle.addImage(obstaceImage);
   obstacle.scale = 0.1;
    obstacle.velocityX = -7;
   obstacle.lifeTime=300;
   obstacleGroup.add(obstacle);
 }
}

function reset(){
  gameState=PLAY;
  score=0;
}
