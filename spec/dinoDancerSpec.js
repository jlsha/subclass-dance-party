describe('dinoDancer', function() {

  it('should interact with dancers', function() {
    var timeBetweenSteps = 17;
    var dinoDancer = new DinoDancer(100, 100, timeBetweenSteps, null, {xVel: 0, yVel: 0}, -1); 
    var dancer = new Dancer(100, 100, timeBetweenSteps);
    var clock = sinon.useFakeTimers();
    sinon.spy(dancer, 'explode');
    window.dancers = [dancer];
    dinoDancer.step();
    for(var i = 0; i < 5; i++) {
      clock.tick(timeBetweenSteps);
    }
    expect(dancer.explode.called).to.be.true;

  });

});