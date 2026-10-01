//how many shapes to draw in each shrinking set, and the shared spacing step
let numShapes;
let spacing;

//random positions for each shape, picked once when the sketch loads
let sq1X, sq1Y;
let sq2X, sq2Y;
let circX, circY;

//size unit, used for scaling shapes
let unitW, unitH;

//global variables for rotation
let angle1, angle2, angle3;
let rotSpeed1, rotSpeed2, rotSpeed3;

//colorPalette
let colorPal = ['#D73220','#F9ECE5','#68150A','#0B78B3','#1F0062'];
let randCol1;
//transparent alpha
let opacity;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);

  angle1 = 0; 
  angle2 = 0; 
  angle3 = 0; 

  rotSpeed1 = random(-1,3);
  rotSpeed2 = random(-1,3);
  rotSpeed3 = random(-1,3);


  //color Setup
  opacity = random(50);

  //random color: 1 = background, 2 = circle fill, 3 = circle stroke
  randCol1 = floor(random(0, colorPal.length));

  //print the resutl
  console.log('randomColor:',randCol1);

  unitW = width/8;
  unitH = height/8;

  numShapes = colorPal.length;
  spacing = 1/numShapes;

  console.log('spacing:',spacing);

  //random position for each shape
  sq1X = random(width);
  sq1Y = random(height);

  sq2X = random(width);
  sq2Y = random(height);

  circX = random(width);
  circY = random(height);

  console.log('randomPos:', sq1X,sq1Y,sq2X,sq2Y,circX,circY);

}

function draw() {
background(0,opacity);

//strokeForAllShapes 
strokeWeight(15);
//no filling Color for any shape

noFill();
push();
translate(sq1X,sq1Y);
rectMode(CENTER);
rotate(angle1);

//size of FirstSquare
let sq1W = unitW*3;
let sq1H = unitH*4;
let sq1WSpacing = sq1W*spacing;
let sq1HSpacing = sq1H*spacing;

for (let i = 0; i < numShapes; i++) {
  stroke(colorPal[i]);
  rect(0,0,sq1W,sq1H);
  sq1W -= sq1WSpacing;
  sq1H -= sq1HSpacing;
}

pop();

//roate White
push();
translate(sq2X,sq2Y);
rectMode(CENTER);
rotate(angle2);

let sq2W = unitW*2;
let sq2H = unitH*3;
let sq2WSpacing = sq2W*spacing;
let sq2HSpacing = sq2H*spacing;

for (let i = 0; i < numShapes; i++) {
  stroke(colorPal[i]);
  rect(0,0,sq2W,sq2H);
  sq2W -= sq2WSpacing;
  sq2H -= sq2HSpacing;
}
pop();

//CircleSetup
push();
translate(circX,circY);

// local variable
let circSize = unitH*3;
stroke(colorPal[randCol1]);
circle(0,0,circSize);
rotate(angle3);
line(0,0,circSize/2,0);
pop();

angle1 += rotSpeed1; 
angle2 += rotSpeed2;
angle3 += rotSpeed3;
}