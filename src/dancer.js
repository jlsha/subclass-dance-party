// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, imagePath) {
  // use jQuery to create an HTML <span> tag
  if (!imagePath) {
    this.imagePath = 'images/bunny.gif';
  } else {
    this.imagePath = imagePath;
  }

  // this.$node = $('<span class="dancer"></span>');
  this.$node = $('<img class="dancer" src=\'' + this.imagePath + '\' />');

  var styleSettings = {
    top: Math.min(top, $(window).height() - 200),
    left: Math.min(left, $(window).width() - 200), 
  };
  this.$node.css(styleSettings);
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  var styleSettings = {
    left: 0
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.explode = function() {
  this.$node.attr('src', 'images/big_explosion.gif');
};