function windowResized() {
  resizeCanvas(windowWidth - 5, 500);
}

let sun;
let planets = [];
const G = 30;
// const capturer = new CCapture({
//   frameRate: 5,
//   format: "webm",
//   name: "world1",
//   quality: 100,
//   verbose: true,
// });
let p5Canvas;
const canvasSize = 650;

function setup() {
  // p5 set up
  colorMode(HSB, 255);
  const numPlanets = random(1, 8);
  p5Canvas = createCanvas(windowWidth - 5, 500);
  p5Canvas.position(0, 200);
  p5Canvas.style("z-index");
  sun = new Sun(80, createVector(0, 0), createVector(0, 0));

  for (let i = 0; i < numPlanets; i++) {
    // planet position
    let r = random(sun.r, canvasSize / 2);
    let theta = random(TWO_PI);
    let planetPos = createVector(r * cos(theta), r * sin(theta));

    //planet velocity
    let planetVel = planetPos.copy();
    planetVel.rotate(HALF_PI);
    planetVel.setMag(sqrt((G * sun.mass) / planetPos.mag()));
    if (random(1) < 0.1) {
      planetVel.mult(-1);
    }
    const destabalize = random(0, 0.3);
    planetVel.mult(random(1 - destabalize, 1 + destabalize));
    planets.push(new Body(random(5, 30), planetPos, planetVel));
  }
}

function draw() {
  clear();
  translate(width / 2, height / 2);

  sun.show();
  for (const planet of planets) {
    sun.attract(planet);
    planet.show();
    planet.update();
  }
}

class Body {
  constructor(mass, pos, vel) {
    this.mass = mass;
    this.pos = pos;
    this.vel = vel;
    this.r = this.mass;
    this.path = [];
    this.color = random(0, 255);

    this.show = () => {
      noStroke();

      fill(this.color - 10, 180, 200);
      ellipse(this.pos.x + this.r / 22, this.pos.y - 1, this.r + 4, this.r + 4);

      fill(this.color, 180, 200);
      ellipse(this.pos.x, this.pos.y, this.r, this.r);
      stroke("#262626");
      for (let i = 0; i < this.path.length - 8; i++) {
        line(
          this.path[i].x,
          this.path[i].y,
          this.path[i + 1].x,
          this.path[i + 1].y
        );
      }
    };

    this.update = () => {
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
      this.path.push(this.pos.copy());
      if (this.path.length > 35) {
        this.path.splice(0, 1);
      }
    };

    this.applyForce = (f) => {
      this.vel.x += f.x / this.mass;
      this.vel.y += f.y / this.mass;
    };

    this.attract = (child) => {
      let r = dist(this.pos.x, this.pos.y, child.pos.x, child.pos.y);
      let f = this.pos.copy().sub(child.pos);
      f.setMag((G * this.mass * child.mass) / (r * r));
      child.applyForce(f);
    };
  }
}

class Sun extends Body {
  constructor(mass, pos, vel) {
    super(mass, pos, vel);
    this.color = random(10, 35);
  }
}
