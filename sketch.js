let a = 0;
const flowerNumber = 1;
let colorArray = [];
let sizeArray = [];
let cycleArray = [];
let posArray = []

function setColorArray() {
  colorArray.push(random(0, 50));
}
function setSize() {
  sizeArray.push(random(100, 200));
}
function setCycle() {
  const number1 = random(3,10)
  const number2 = random(1,3)
  cycleArray.push({num: number1, den: number1 + number2});
}
function setPos() {
  posArray.push({x: random(100, windowWidth - 100), y: random(100, windowHeight - 100)});
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode( HSB, 100 );
  for (let i = 0; i < flowerNumber; i++) {
    setColorArray();
    setSize();
    setCycle();
    setPos();
  }
}

function draw() {
  translate(windowWidth/2,windowHeight/2);
  noStroke();
  a += 0.01;

  for (let i = 0; i < flowerNumber; i++) {
    fill(colorArray[i]);
    const rot = cos(cycleArray[i].num / cycleArray[i].den * a);
    if(rot < -0.5 || rot > 0.5) return;
    let r = sizeArray[i] * rot;
    let x = r * cos(a);
    let y = r * sin(a);
    ellipse(x, y, 10, 10);
    // ellipse(posArray[i].x + x, posArray[i].y + y, 10, 10);
  }
}
