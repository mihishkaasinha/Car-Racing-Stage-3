class Game {
  constructor(){}
  
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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play()
  {
    form.greeting.hide();
    textSize(20);
    text("Game Start", 200, 200);
    Player.get_player_info();
    
    if (all_players !== null)
    {
      var display_position = 100;
      for (var ply in all_players)
      {
        if (ply === "player" + player.index)
        fill("blue");
        else
        fill("red");
        display_position += 30;
        textSize(15);
        text(all_players[ply].name + ":" + all_players[ply].distance, 200, 200, display_position)
      }
    }
    if (keyDown(UP_ARROW) && player.index !== null)
    {
      player.distance += 20;
      player.update();
    }
  }

}
