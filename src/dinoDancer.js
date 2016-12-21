var DinoDancer = function(top, left, timeBetweenSteps, imagePath, velocity, collisionBuffer) {
  MovingDancer.call(this, top, left, timeBetweenSteps, "images/dino.gif", velocity);
  this.collisionBuffer = collisionBuffer || 50;
};

DinoDancer.prototype = Object.create(MovingDancer.prototype);
DinoDancer.prototype.constructor = DinoDancer;

DinoDancer.prototype.step = function() {
  MovingDancer.prototype.step.call(this);
  for (var i = 0; i < window.dancers.length; i++) {
    // collision check
    if (this !== window.dancers[i]) {
      var dancer = window.dancers[i];

      var buffer = this.collisionBuffer; // buffer to make collisions less sensitive

      if (!(dancer instanceof DinoDancer) && !(dancer.$node.data('size') === 'bigger')) {
        // detect collisions
        debugger
        if(!(
          (this.$node.offset().top > dancer.$node.offset().top + dancer.$node.height() - buffer) ||
          (this.$node.offset().left > dancer.$node.offset().left + dancer.$node.width() - buffer) ||
          (this.$node.offset().top + this.$node.height() < dancer.$node.offset().top + buffer) ||
          (this.$node.offset().left + this.$node.width() < dancer.$node.offset().left + buffer)
          )) {
          dancer.explode();
        }
      }
    }
  }
};

