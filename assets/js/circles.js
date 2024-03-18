let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    circles[i] = new Circle(
      random(width),
      random(height),
      random(5, 20),
      color("#007bff")
    );
  }
}

function draw() {
  background(255);
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i < circles.length; i++) {
    circles[i].updateSpeed();
  }
}

class Circle {
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = random(-0.6, 0.6);
    this.ySpeed = random(-0.6, 0.6);
    this.color = c;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > width - this.r || this.x < this.r) {
      this.xSpeed *= -1;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.ySpeed *= -1;
    }
  }

  updateSpeed() {
    this.xSpeed *= width / windowWidth;
    this.ySpeed *= height / windowHeight;
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
