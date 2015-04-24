// Let's not touch this section
var canvasElem = document.getElementById("game");
var boxworld = boxbox.createWorld(canvasElem);

// Effects
function rain_blocks (block, seconds) {
    var secs = seconds*1000;
    setInterval(function() {
        world.createEntity(block, {
          x: Math.floor((Math.random()*10)+1),
          y: .01
        });
    }, secs);
}

// Look below this line, not above it
var ground = {
      name: "ground",
      shape: "square",
      type: "static",
      color: "rgb(0,100,0)",
      width: 20,
      height: 1,
      x: 10,
      y: 18
    };

var ceiling = {
      name: "ceiling",
      shape: "square",
      type: "static",
      color: "rgb(0,100,0)",
      width: 20,
      height: 1,
      x: 10,
      y: 0
    };

var wall = {
      name: "wall",
      shape: "square",
      type: "static",
      color: "rgb(0,100,0)",
      width: 0.5,
      height: 20
    };


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

var player = {
    name: "player",
    shape: "circle",
    radius: 1,
    image: "http://www.petco.com/assets/shop/img_left_guineapig.jpg",
    imageStretchToFit: true,
    density: 4,
    x: 2,
    y:18,
    width: 1,
    height: 1,
    onKeyDown: function(e) {
        var kc = e.keyCode;
        if(kc == KEYCODES['space']) {
          this.applyImpulse(200, 45);
        }
        else if(kc == KEYCODES['up_arrow']) {
          this.applyImpulse(100, 0);
        }
        else if(kc == KEYCODES['down_arrow']) {
          this.applyImpulse(100, 180);
        }
        else if(kc == KEYCODES['left_arrow']) {
          this.applyImpulse(100, -90);
        }
        else if(kc == KEYCODES['right_arrow']) {
          this.applyImpulse(100, 90);
        }
    },
    onImpact: function(entity, force) {
        var gp = this;
        if(entity.name() == "block") {

        }
        if(entity.name() == "ground" && force > 4) {
            this.destr
        }
    }
};


// Start Game
//-------------------------------------------------
var startGame = function(world) {
    world.createEntity(ground);
    world.createEntity(ceiling);
    world.createEntity(wall, {
        x: 0.3,
        y: 10
    });
    world.createEntity(wall, {
        x: 19.75,
        y: 10
    });
    
    // --- Addding blocks
    world.createEntity(player);
    
    world.createEntity(rectangle_sideways, {
        x: 15,
        y: 7,
        color: "red"
    });
    
    world.createEntity(rectangle_sideways, {
        x: 15,
        y: 11,
        color: "red"
    });
    
    world.createEntity(rectangle, {
        x: 14,
        y: 10,
        color:"blue"
    });
    
    world.createEntity(rectangle, {
        x: 16,
        y: 10,
        color:"blue"
    });
    
    
    world.createEntity(rectangle, {
        x: 14,
        y: 17,
        color: "orange"
    });
    
    world.createEntity(rectangle, {
        x: 16,
        y: 15,
        color: "orange"
    });
    
    return world;
}



//----------------------------------------------------
var game = startGame(boxworld);
$("h1").on("click", function() {
    var canvas = document.getElementById("game");
    var context = canvas.getContext("2d");
    context.clearRect(10, 10, 600, 540 );
    console.log("s");
//    startGame(boxworld);
});

