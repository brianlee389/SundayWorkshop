var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

var hi = {
  name: "player",
  shape: "circle",
  radius: 1,
  image: "http://simpleicon.com/wp-content/uploads/bowling-ball.png",
  imageStretchToFit: true,
  density: 4,
  x: 5,
    y: 10,
  onKeyDown: function(e) {
    if(e.keyCode == 32) {
      this.applyImpulse(180, 90);
        
console.log(document.getElementById("angle").value);
    }
    
  }
};

world.createEntity({
  name: "player",
  shape: "circle",
  radius: 1,
  image: "http://1.bp.blogspot.com/-0KPUmyQ1k5U/Uv780jk0E3I/AAAAAAAAKjk/X2JHlvBasjE/s1600/Angry+birds.png",
  imageStretchToFit: true,
  density: 4,
  x: 2,
  onKeyDown: function(e) {
    if(e.keyCode == 32) {
      //this.applyImpulse(180, 90);
        world.createEntity(hi).applyImpulse(180,90);
console.log(document.getElementById("angle").value);
    }
    
  }
});



world.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  color: "rgb(0,100,0)",
  width: 20,
  height: .5,
  y: 12
});

var block = {
  name: "block",
  shape: "square",
    image: "http://www.clipartbest.com/cliparts/Kij/egj/Kijegj5iq.png",
    imageStretchToFit: true,
  width: 5,
  height: 4,
  onImpact: function(entity, force) {
    if (entity.name() === "player") {
      this.color("black");
    }
  }
};

world.createEntity(block, {
  x: 15,
    color: "blue"
});
world.createEntity(block, {
  x: 15
});
world.createEntity(block, {
  x: 15
});

world.createEntity(block, {
  x: 17
});

world.createEntity(block, {
  x: 16,
  y: 1,
  width: 4,
  height: .5
});

world.createEntity(block, {
  x: 16,
  y: 2,
  width: 4,
  height: .5
});

world.createEntity(block, {
  x: 12,
  y: 5,
  width: .5,
  height: 5
});