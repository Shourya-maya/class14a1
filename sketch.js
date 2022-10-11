var ball = {
x:15,
y:15,
radius:15,
xspeed:0,
yspeed:0,
colour:"blue"
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
circle(
  ball.x,
  ball.y,
ball.radius
)
ball.xspeed=4
ball.x=ball.x+ball.xspeed
fill (
  ball.colour
)

}