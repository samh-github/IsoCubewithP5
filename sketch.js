

let angle = 0;
let w = 26;
let ma;
let maxD;
let oVal = 700;
let cVal = 600;


function setup() {
  createCanvas(cVal, cVal, WEBGL);
  ma = atan(1/ sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(37, 3, 51);
  ortho(-oVal, oVal, -oVal, oVal, 0, 1000);
  rotateX(-ma);
  rotateY(PI/4);


  for(let z = 0; z < height; z += w) {
    for(let x = 0; x < width; x+= w) {
    push();
    let d = dist(x, z, width / 2, height / 2);
    let offset = map(d, 0, maxD, -PI, PI);
    let a = angle + offset;
    let h = floor(map(cos(a), -1, 1, 200, 500));
    translate(x - width / 2, 0, z - height / 2 );
    normalMaterial();
    box(w - 2, h, w -2);
    pop();
    }
  }
  angle -= 0.065;
}

