class Player {
  constructor()
  {
    this.index = null;
    this.name = null;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name : this.name,
      distance : this.distance
    });
  }

  static get_player_info()
  {
    var player_info_ref = database.ref('players');
    player_info_ref.on("value", (data) => {
      all_players = data.val();
    })
  }

}