// Business logic
function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
}

// Try out for one dice
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry " + " " + ", you rolled a 1! Your turn is over!");
    // this.changeturn();
  } else {
    this.tempscore += this.roll;
  }
};

// hold button
Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  // this.changeturn();
  alert(this.playerName + ", your turn is over, pass the mouse!");
};

// check for the winner
Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 10) {
    alert(this.playerName + " You are the winner!");
  }
};

// check for newGame
Player.prototype.newGame = function () {
    //debugger;
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
  }

  // User Interface
  $(document).ready(function() {
    $("button#start").click(function(event){
        player1 = new Player(true);
        player2 =  new Player(false);
        $(".player-console").show();
        $(".start-menu").hide();
    

  });
