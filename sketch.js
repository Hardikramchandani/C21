var bullet,wall;
var thickness,speed,weight;

speed = Math.random(223,321);
weight = Math.random(30,52);
thickness = Math.random(22,83);

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("skyblue");  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10) {
      wall.shapeColor=color(225,0,0);
    }

    if (damage<10) {
      wall.shapeColor=color(0,225,0);
    }
  }
  
  drawSprites();
}

function hasCollided(bullet,wall){
    bulletRightEdge=bullet.x + bullet.width;
    wallLeftEdge= wall.x;
    if (bulletRightEdge>=wallLeftEdge) {
      return true;
    }
    return false;
}