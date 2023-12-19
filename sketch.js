let osc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator();
  osc.setType("square");
  osc.start();
}

function draw() {
  background(220);

  let freq = map(mouseX, 0, width, 100, 1000);
  osc.freq(freq);
  osc.amp(0.5);
}
