// Let's not touch this section
var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

/*
var angleInput = $("#angle");
var angleInputText = $("#angle-text");

var powerInput = $("power");
var powerInputText = $("power-text");

angleInput.change(function() {
    angleInputText.value = angleInput.value;
    console.log(angleInput.value);
}, false);

powerInput.change(function() {
    powerInputText.value = powerInput.value;
    console.log(powerInput.value);
}, false);
*/

// Ignore everything above this
// This is the stuff you can change

var square = {
  name: "block",
  shape: "square",
  color: "brown",
  width: 3,
  height: 3,
  onImpact: function(entity, force) {
    if (entity.name() === "player") {
      this.color("black");
    }
  }
};


var flashysquare = {
    name: "block",
    shape: "square",
    color: "brown",
    width: 3,
    height: 3,
    onImpact: function(entity, force) {
        if (entity.name() === "player") {
            this.color("black");
        }
    },
    onTick: function() {
        if(this.color() == "blue") {
            this.color("green");
        } else {
            this.color("blue");
        }
    }
};

var rectangle = {
    name: "block",
    shape: "square",
    color: "brown",
    width: 1,
    height: 4,
    onImpact: function(entity, force) {
        if (entity.name() === "player") {
            this.color("black");
        }
    }
};
    
var rectangle_sideways = {
    name: "block",
    shape: "square",
    color: "brown",
    width: 4,
    height: 1,
    onImpact: function(entity, force) {
        if (entity.name() === "player") {
            this.color("black");
        }
    }
};

var bowlingpin = {
    name: "block",
    shape: "square",
    image: "http://www.i2clipart.com/cliparts/a/1/5/d/clipart-bowling-pin-512x512-a15d.png",
    width: 1,
    height: 4,
    imageStretchToFit: true
};


// player is a bowling ball
var player = {
      name: "player",
      shape: "circle",
      radius: 1,
      image: "http://simpleicon.com/wp-content/uploads/bowling-ball.png",
      imageStretchToFit: true,
      density: 4,
      x: 2,
      y: 17,
      onKeyDown: function(e) {
          if(e.keyCode == KEYCODES['space']) {
            this.applyImpulse(500, 90);
          }
      }
    };
function startGame() {
    world.createEntity({
      name: "ground",
      shape: "square",
      type: "static",
      color: "rgb(0,100,0)",
      width: 20,
      height: .5,
      x: 10,
      y: 18
    });
    
    world.createEntity(player);

    world.createEntity(bowlingpin, {
        x: 10,
        y: 10,
        onImpact: function(entity, force) {
            if (entity.name() === "player") {
                //this.applyImpulse(500, -45);
            }
        }
    });

    world.createEntity(bowlingpin, {
        x: 13,
        y: 10
    });

    world.createEntity(bowlingpin, {
        x: 17,
        y: 10
    });

    world.createEntity(bowlingpin, {
        x: 19,
        y: 10
    });

}



startGame();