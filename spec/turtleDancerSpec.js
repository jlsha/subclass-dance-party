describe('turtleDancer', function() {

  it('should change velocities', function() {
    var timeBetweenSteps = 17;
    var clock = sinon.useFakeTimers();
    var turtleDancer = new TurtleDancer(200, 200, timeBetweenSteps, null, {xVel: 2, yVel: 2});
    turtleDancer.step();
    clock.tick(timeBetweenSteps);
    expect(turtleDancer.velocity.xVel).to.not.equal(2);
  });

});