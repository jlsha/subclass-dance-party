var MovingDancer = function(top, left, timeBetweenSteps, imagePath, velocity) {
  Dancer.call(this, top, left, timeBetweenSteps, imagePath);

  this.timeBetweenSteps = 17;
  this.y = top;
  this.x = left;
  var vel = velocity;
  if (vel === undefined) {
    vel = {
      xVel: Math.random() + 1,
      yVel: Math.random() + 1
    };
  } 
  this.velocity = vel;
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
MovingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.x += this.velocity.xVel;
  this.y += this.velocity.yVel;
  if (this.y < 0 || this.y > $(window).height()) {
    this.velocity.yVel = -this.velocity.yVel;
  } 
  if (this.x < 0 || this.x > $(window).width()) {
    this.velocity.xVel = -this.velocity.xVel;
  }
  this.setPosition(this.y, this.x);
};
MovingDancer.prototype.lineUp = function() {
  Dancer.prototype.lineUp.call(this);
  this.velocity.xVel = 0;
  this.velocity.yVel = 0;
  this.x = 0;
};
