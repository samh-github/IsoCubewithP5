let angle = 0;




function setup() {

  createCanvas(400, 400);
  console.log('setup function section');

}

function draw() {
  // put drawing code here
  background(0);
  translate(width / 2, height / 2);
  rectMode(CENTER);

  let h = 100;
  fill(255);
  rect(0,0, 10, h);

  angle += 0.1;
}