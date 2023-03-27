//global

var DIRECTION = {
  IDLE: 0,
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4, 
};

var rounds = [5,5,3,3,2];
var colors = ["#d4336e", "#33d477", "#1abc9c", "#cc3e2e", "#8acc2e"]

//the ball
var ball {
  new: function (incrementedSpeed) {
    return {
      width: 18,
      height: 18,
      x: (this.canvas.width / 2) -9,
      y: (this.canvas.height / 2) -9,
      moveX: DIRECTION.IDLE,
      moveY: DIRECTION.IDLE,
    }
    
  }
};
var Ai= {
  new: function (side) {
    return{
       width: 18,
      height: 180,
      x: side === 'left' ? 150 : this.canvas.width -150,
      y: (this.canvas.height / 2) -35,
      score: 0
      move: DIRECTION.IDLE,
      speed: 8
    }
  }
}