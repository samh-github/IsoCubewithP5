let angle = 0;
let w = 24;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(100);
  ortho();


  translate(0, 50, -50);
  rotateX( -PI / 4);
 // translate(width / 2, height / 2);
  rectMode(CENTER);

  //rotateX(angle * 0.25);


  let offset = 0;
  for(let y = 0; y < height; y+= w) {
    for(let x = 0; x < width; x+= w) {
    push();
    let a = angle + offset;
    let h = map(sin(a), -1, 1, 0, 100);
    normalMaterial();
    translate(x - width /2, y - height/2, 0);
    box(w - 2, h, w -2);
//    rect(x - width/2 + w/2, 0, w - 2, h);
    offset += 0.1;
    pop();
    }
  }
  angle += 0.1;
}

