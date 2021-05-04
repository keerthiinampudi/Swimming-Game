class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      s1 = createSprite(100,200);
      s1.addAnimation("player1",playeranimation)
      //car1.addImage("car1",car1_img);
      s2 = createSprite(300,200);
      s2.addAnimation("player2",playeranimation2)
     // car2.addImage("car2",car2_img);
      s3 = createSprite(500,200);
      s3.addAnimation("player3",playeranimation3)
      //car3.addImage("car3",car3_img);
      s4 = createSprite(700,200);
      s4.addAnimation("player4",playeranimation4)
      
      swimmers = [s1, s2, s3, s4];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      player.getCarsAtEnd();
      if(allPlayers !== undefined){
        background("blue");
       image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 200 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
         
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          swimmers[index-1].x = x;
          swimmers[index-1].y = y;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            stroke(10);
           fill("red");
           rectMode(CENTER)
           rect(x,y,60,100)
           // ellipse(x,y,60,60);
            swimmers[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = swimmers[index-1].y;
          }
          x = x + 350;
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance > 3860){
        gameState = 2;
        player.rank+=1
        Player.updateCarsAtEnd(player.rank)
        window.alert("your rank:"+player.rank)
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  