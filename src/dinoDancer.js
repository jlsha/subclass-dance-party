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
      var dancer = window.dancers[i];

      var buffer = 30; // buffer to make collisions less sensitive

      // detect collisions
      if(!(
        (this.$node.offset().top > dancer.$node.offset().top + dancer.$node.height()) ||
        (this.$node.offset().left > dancer.$node.offset().left + dancer.$node.width()) ||
        (this.$node.offset().top + this.$node.height() < dancer.$node.offset().top) ||
        (this.$node.offset().left + this.$node.width() < dancer.$node.offset().left)
        )) {
        dancer.explode();
      }

    }
  



  }
};

