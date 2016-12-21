describe('dancer', function() {

  it('should have a method called lineUp', function() {
    var dancer = new Dancer(200, 200, 100, null);
    expect(dancer.lineUp).to.be.a('function');
  });

});