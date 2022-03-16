let a = 0;
let w = window.innerWidth;
let h = window.innerHeight;
const flowerNumber = 2;
let colorArray = [];
let sizeArray = [];
// let cycleArray = [];
const cycle = 6/7;
let posArray = []
// let x;
// const lowGraph = h * 1.5 / w * x - 300;
// const highGraph = h * 0.5 / w * x - 300;

function setColorArray() {
  // colorArray.push(Math.floor(random(0, 20)));
  colorArray.push(0);
}
function setSize() {
  sizeArray.push(Math.floor(random(50, 150)));
}
// function setCycle() {
//   const number = Math.floor(random(3,10));
//   cycleArray.push({num: number, den: number + 1});
// }
function setPos() {
  posArray.push({x: Math.floor(random(100, w - 100)), y: Math.floor(random(100, h - 100))});
}

function setup() {
  createCanvas(w,h);
  colorMode( HSB, 100 );
  for (let i = 0; i < flowerNumber; i++) {
    setColorArray();
    setSize();
    // setCycle();
    setPos();
  }
}

function draw() {
  // translate(windowWidth/2,windowHeight/2);
  noStroke();
  a += 0.03;

  for (let i = 0; i < flowerNumber; i++) {
    fill(colorArray[i]);
    let rot = cos(cycle * a);
    // let rot = cos(cycleArray[i].num / cycleArray[i].den * a);
    if(rot < -0.63 || rot > 0.63) return;
    let r = sizeArray[i] * rot;
    let x = r * cos(a);
    let y = r * sin(a);
    // ellipse(x, y, 10, 10);
    ellipse(posArray[i].x + x, posArray[i].y + y, 4, 4);
  }
}
