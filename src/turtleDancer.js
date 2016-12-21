var TurtleDancer = function(top, left, timeBetweenSteps, imagePath, velocity) {
  MovingDancer.call(this, top, left, timeBetweenSteps, "images/turtle.gif", velocity);
  this.accel = {xAccel: 0.03, yAccel: 0.03};  
};

TurtleDancer.prototype = Object.create(MovingDancer.prototype);
TurtleDancer.prototype.constructor = TurtleDancer;

TurtleDancer.prototype.step = function() {
  MovingDancer.prototype.step.call(this);
  this.velocity.xVel += this.accel.xAccel;
  this.velocity.yVel += this.accel.yAccel;
  if(this.velocity.xVel > 6 || this.velocity.xVel < -6) {
    this.accel.xAccel = -this.accel.xAccel;
  }
  if(this.velocity.yVel > 6 || this.velocity.yVel < -6) {
    this.accel.yAccel = -this.accel.yAccel;
  }
};

TurtleDancer.prototype.lineUp = function() {
  MovingDancer.prototype.lineUp.call(this);
  this.accel = {xAccel: 0, yAccel: 0};
};