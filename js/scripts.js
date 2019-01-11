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
