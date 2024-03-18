let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    circles[i] = new Circle(random(width), random(height), random(5, 20));
  }
}

function draw() {
  background(220);
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i < circles.length; i++) {
    circles[i].x = random(width);
    circles[i].y = random(height);
  }
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }

  display() {
    ellipse(this.x, this.y, this.r * 2);
  }
}
