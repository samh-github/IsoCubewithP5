let angle = 0;
let w = 28;
let ma;
let maxD;

function setup() {
  createCanvas(500, 500, WEBGL);
  ma = atan(1/ sqrt(2));
  maxD = dist(0, 0, 150, 150);
}

function draw() {
  background(37, 3, 51);
  ortho(-500, 500, -500, 500, 0, 1000);
  rotateX(-ma);
  rotateY(-QUARTER_PI);


  for(let z = 0; z < height; z += w) {
    for(let x = 0; x < width; x+= w) {
    push();
    let d = dist(x, z, width / 2, height / 2);
    let offset = map(d, 0, maxD, -PI, PI);
    let a = angle + offset;
    let h = floor(map(cos(a), -1, 1, 100, 300));
    translate(x - width / 2, 0, z - height / 2 );
    normalMaterial();
    box(w - 2, h, w -2);
//    rect(x - width/2 + w/2, 0, w - 2, h);
    pop();
    }
  }
  angle -= 0.05;
}

