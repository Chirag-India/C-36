class game {
    constructor(){}
     getState(){
         var gameStateref = database.ref ("gameState");
         gameStateref.on("value",function(data){
             gameState=data.val();
         }
             )
     }
     update(state){
         database.ref('/').update({
             gameState:state
         })
        
        }
     start(){
        if(gameState===0){
            player= new player();
            player.getCount();
            form1=new form();
            form1.display();
        }
     }
     play(){
         form.hide();
         textSize(30);
         text("GAME START",120,300);
         player.getplayerinfo();
         if(Allplayers!==undefined){
             var Displayposition=130;
             for(var plr in Allplayers){
                 if(plr === "player"+ player.index){
                     fill("red");
                    
                 }
                    else {
                        fill("black");

                    }
                    Displayposition += 20;
                    textSize(15);
                    text(Allplayers[plr].name+": "+Allplayers[plr].distance,120,Displayposition);
            }
         }
         if(keyIsDown(UP_ARROW)&&player.index!==null){
             player.distance+=50;
             player.update();
         }
            
     }
}
