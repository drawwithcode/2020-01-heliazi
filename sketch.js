function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(40);
  background('white');

}

function draw() {


  noFill();
  var angle1 = frameCount * 5;
  var xciao = 30 * cos(angle1);
  var yciao = 30 * sin(angle1);

  push()
  translate(width / 3, height / 2);
  rotate(xciao);
  stroke(lerpColor(color('black'), color('black'), frameCount / 2));
  polygon(4, 2, frameCount, 5);
  pop();

  push()
  translate(width / 1.5, height / 2);
  rotate(xciao);
  stroke(lerpColor(color('black'), color('black'), frameCount / 2));
  polygon(4, 2, frameCount, 5);
  pop();


  if (frameCount == 210) {
    noLoop();
  }
}

function polygon(x, y, radius, npoints) {

  var angle = 360 / npoints;
  beginShape();

  for (var a = 0; a < 360; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
