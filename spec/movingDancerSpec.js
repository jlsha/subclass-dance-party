describe('movingDancer', function() {

  it('should be in different position after stepping', function() {
    var timeBetweenSteps = 17;
    var clock = sinon.useFakeTimers();
    var movingDancer = new MovingDancer(200, 200, timeBetweenSteps, null, {xVel: 2, yVel: 2});
    movingDancer.step();
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    expect(movingDancer.x).to.equal(208);
    expect(movingDancer.y).to.equal(208);
  });

  it('should reverse when colliding with edge of screen', function() {
    var timeBetweenSteps = 17;
    var clock = sinon.useFakeTimers();
    var movingDancer = new MovingDancer(1, 0, timeBetweenSteps, null, {xVel: 0, yVel: -2});
    movingDancer.step();
    clock.tick(timeBetweenSteps);
    expect(movingDancer.velocity.yVel).to.be.above(0);
  });

});