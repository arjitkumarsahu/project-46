var form,game;
var bg;
var continueButton;
var femaleCop,maleCop;
var fCop_Img,mCop_Img;
var police;
var zombiesGroup;
var points=0;
var arrow;
var gameState=0;
var FpoliceImg,MpoliceImg;
var zombie1Img,zombie2Img,zombie3Img,zombie4Img;

function preload(){
  bg=loadImage("bg.png");
  fCop_Img=loadImage("policeFemale.png");
  mCop_Img=loadImage("policeMan.png");
  FpoliceImg=loadImage("femalecop.png");
  //MpoliceImg=loadImage("policeMan.png");
  zombie1Img=loadImage("zombie1.png");
  zombie2Img=loadImage("zombie2.png");
  zombie3Img=loadImage("zombie3.png");
  zombie4Img=loadImage("zombie4.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  game=new Game();
  zombiesGroup=createGroup();
  //arrow=createSprite(displayWidth/2,displayHeight/2);

}

function draw() {
  background(bg);  

    game.start();
   
    
    if(mousePressedOver(femaleCop)){
      femaleCop.visible=false;
      maleCop.visible=false;
      gameState=1;
    }
    if(gameState===1){
      game.fplay();
    }
}
function zombies(){
  if(frameCount%40==0){
    var zombies=createSprite(displayWidth,300);
    zombies.y=Math.round(random(300,800));
    zombies.velocityX=-5;
    var num=Math.round(random(1,4));

    switch(num){
      case 1: zombies.addImage(zombie1Img);
      break;
      case 2: zombies.addImage(zombie2Img);
      break;
      case 3: zombies.addImage(zombie3Img);
      break;
      case 4: zombies.addImage(zombie4Img);
      break;
      default: break;
    }
    zombies.lifetime=500;
    zombiesGroup.add(zombies);

    }
}
