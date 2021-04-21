


var sword, swordImage, enemyG, enemyImage, fruit1, fruit2,
    fruit3, fruit4, fruitG, fruit1Image, fruit2Image, fruit3Image, fruit4Image, score,gameOverImage

var gameOverSound
var knifeSwordSound
var PLAY=1
var END=0
var gameState=PLAY



function preload(){ 
  //load images and animations here
  swordImage= loadImage("sword.png")
  enemyImage=loadAnimation("alien1.png","alien2.png")
  fruit1Image=loadImage("fruit1.png")
  fruit2Image=loadImage("fruit2.png")
  fruit3Image=loadImage("fruit3.png")
  fruit4Image=loadImage("fruit4.png")
  gameOverImage=loadImage("gameover.png")
  gameOverSound=loadSound("gameover.mp3")
  knifeSwordSound=loadSound("knifeSwooshSound.mp3")
 
 
}

function setup(){
  //creating canvas
  createCanvas(windowWidth,windowHeight)
  
  //creating sprite for sword
  sword=createSprite(width-200,height-200,100,100);
  sword.addImage(swordImage)
  sword.scale=0.5
  
  
  //Making groups
  enemyG= new Group()
  fruitG= new Group()
  
  score=0
  
}

function draw(){
  
  //creating backgrond
   background("skyblue")

 if (gameState===PLAY) {
   
   //moving sword
    sword.x=World.mouseX
    sword.y=World.mouseY
  
   //adding code here to select items randomly
  var select_item = Math.round(random(1,5));
  if (World.frameCount%100===0){
   if (select_item == 1) {
      fruit1()
    } else if (select_item == 2) {
      enemy()
    } else if (select_item == 3) {
      fruit2()
    } else if (select_item == 4){
      fruit3()
   } else {
      fruit4()
    }
     }
 //whenever sword will touch any of the item the item should disappear so fill input here for that
   if(touches.fruitG){
     fruitG.destroyEach()
    score=score+1
     knifeSwordSound.play();
     }
   
   else
     
   if(touches.enemyG){
     enemyG.destroyEach()
    gameState=END;
     fruitG.destroyEach()
     enemyG.setVelocityXEach(0)
     fruitG.setVelocityXEach(0)
     sword.addImage(gameOverImage)
     sword.scale=2
     sword.x=300
     sword.y=200
     gameOverSound.play();
     
     }
   }
 
  drawSprites();
  
  
 text("Score: "+ score, 500,50);
  
}

function enemy(){
//add code here for enemy (item)
 var enemy=createSprite(width-600,Math.round(random(windowHeight),10,10))
  
 enemy.addAnimation("enemy_blinking",enemyImage)
  enemy.velocityX=-6
  enemy.scale=0.75
  enemy.lifetime=150
  enemyG.add(enemy)
  
}

 function fruits(){
   
  //creating sprite for fruits,then adding math.round to select items randomly
  if(World.frameCount%80===0){ 
  fruit=createSprite(400,200,20,20);
  fruit.scale=0.2; 
  fruit.debug=false; 
  r=Math.round(random(1,4));   
    
  //adding images to display randomly
  if (r == 1) { fruit.addImage(fruit1); }
  else if (r == 2) { fruit.addImage(fruit2); } 
  else if (r == 3) { fruit.addImage(fruit3); }
  else { fruit.addImage(fruit4); } 
     
 fruit.y=Math.round(random(50,340));  
 fruit.velocityX=-7;
    
 //Giving lifetime to fruits
 fruit.setLifetime=100; 
    
 //adding fruits/items in fruitGroup
 fruitGroup.add(fruit); 
  }
 }
function fruit1(){
  //creating sprite for fruit1
   var fruit1=createSprite(600,Math.round(random(30,400)),10,10)
   var set_position=Math.round(random(1,2));
  if (set_position==1){
    fruit1.x=600;
    fruit1.velocityX=-(7+(score/4));
    }else{
      fruit1.x=0;
      fruit1.velocityX=7+(score/4)
    }
    fruit1.addImage(fruit1Image)
  fruit1.scale=0.2
  fruit1.lifetime=150
  fruitG.add(fruit1)
}

function fruit2(){
   //creating sprite for fruit2
   var fruit2=createSprite(600,Math.round(random(30,400)),10,10)
   var set_position=Math.round(random(1,2));
  if (set_position==1){
    fruit2.x=600;
    fruit2.velocityX=-(7+(score/4));
    }else{
      fruit2.x=0;
      fruit2.velocityX=7+(score/4)
    }
    fruit2.addImage(fruit2Image)
  fruit2.scale=0.2
  fruit2.lifetime=150
  fruitG.add(fruit2)
  }

function fruit3(){
   //creating sprite for fruit3
   var fruit3=createSprite(600,Math.round(random(30,400)),10,10)
   var set_position=Math.round(random(1,2));
  if (set_position==1){
    fruit3.x=600;
    fruit3.velocityX=-(7+(score/4));
    }else{
      fruit3.x=0;
      fruit3.velocityX=7+(score/4)
    }
    fruit3.addImage(fruit3Image)
  fruit3.scale=0.2
  fruit3.lifetime=150
  fruitG.add(fruit3)
  }

function fruit4(){
   //creating sprite for fruit4
   var fruit4=createSprite(600,Math.round(random(30,400)),10,10)
   var set_position=Math.round(random(1,2));
  if (set_position==1){
    fruit4.x=600;
    fruit4.velocityX=-(7+(score/4));
    }else{
      fruit4.x=0;
      fruit4.velocityX=7+(score/4)
    }
    fruit4.addImage(fruit4Image)
  fruit4.scale=0.2
  fruit4.lifetime=150
  fruitG.add(fruit4)
  }