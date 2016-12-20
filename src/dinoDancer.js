var DinoDancer = function(top, left, timeBetweenSteps, imagePath, velocity) {
  MovingDancer.call(this, top, left, timeBetweenSteps, "images/dino.gif", velocity);
};

DinoDancer.prototype = Object.create(MovingDancer.prototype);
DinoDancer.prototype.constructor = DinoDancer;

DinoDancer.prototype.step = function() {
  MovingDancer.prototype.step.call(this);
  for (var i = 0; i < window.dancers.length; i++) {
    // collision check
    if (this !== window.dancers[i]) {
      var dancer = window.dancers[i].$node;

      /*
      console.log('height: ' + dancer.height());
      console.log('width: ' + dancer.width()); 
      console.log(this.$node.height());
      console.log(this.$node.width());
      */

      if (this.x < dancer.offset().left + dancer.width() &&
        this.x + this.$node.width() > dancer.offset().left &&
        this.y < dancer.offset().top + dancer.height() &&
        this.y + this.$node.height() > dancer.offset().top) {
        window.dancers[i].explode();
        // console.log('collision detected');
      }
    }



  }
};

