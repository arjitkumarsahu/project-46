class Game{
    constructor(){}

    start(){
        if(gameState===0){

            form.display();
        femaleCop=createSprite(displayWidth/4,displayHeight/2);
        femaleCop.addImage(fCop_Img);
        femaleCop.scale=1.2;
        maleCop=createSprite(3*displayWidth/4,displayHeight/2);
        maleCop.addImage(mCop_Img);
        maleCop.scale=0.5;

        drawSprites();
        }
        
    }
    fplay(){
        //femaleCop.visible;
        //maleCop.destroy();
        background("black");
        police=createSprite(300,200);
            police.addImage(FpoliceImg);
          
          textSize(20);
          text("points : "+points,100,30);
      
        police.y=mouseY;
        zombies();
          if(police.isTouching(zombiesGroup)){
            zombiesGroup.destroyEach();
            points+=1;
                }
                drawSprites();
    }
    
}