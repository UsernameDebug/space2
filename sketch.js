var moon,moonImage;
var skyImage;
var pipe,pipeImage;
var hero,heroImage;
var score=0
var obsGroup;
var play=1,end=0;
var gameState=play
function preload(){

skyImage=loadImage("bg.png")
moonImage=loadImage("moon.png")
pipeImage=loadImage("pipe.png")
heroImage=loadImage("hero.png")
}

function setup(){
    createCanvas(1279,600)
    moon=createSprite(1250,100,6,6)

    hero=createSprite(200,300,200,200)
    hero.addImage(heroImage)
    hero.scale=0.1
   obsGroup=createGroup()

   moon.addImage(moonImage)
   moon.velocity.x=-3
   moon.scale=0.09
 
  }

function draw(){
 if(gameState===play){

  if(keyDown("SPACE")){
    hero.y=hero.y-7
  }  
  else{
hero.y=hero.y+7
  }
// the below one is to move moon
  if(moon.x<-10){
    moon.x=1250
    }

    

    

    
 }
   background(skyImage)
    
    
   pipe=createSprite(1250,520,30,30)
pipe.addImage(pipeImage)
   pipe.scale=0.3

    
    

   
    /*if(score>=200){
      console.log("hello")
      pipe.velocityX=-90
    } */
    
   
    drawSprites();}

