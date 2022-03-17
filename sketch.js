// 周期
let a = 0;

//ビューポート幅
let w = window.innerWidth;
let h = window.innerHeight;

// 定数
const flowerNumber = 15;
const cycle = 6/7;
const rBold = 50;

// アレイ
let colorArray = [];
let sizeArray = [];
let posArray = [];
// let cycleArray = [];


// 花の大きさ
const rMin = 30;
const rMax = 100;

// 出現範囲調整用
function lowGraph(x) {
  return  (h / w) * x + h / 2
}
function highGraph(x) {
  return  (h / w) * x - h / 2
}

// セットアップ
function setup() {
  // キャンバスのサイズ
  createCanvas(min(w,h) - 100, min(w,h) - 100);

  // それぞれの花の初期情報
  for (let i = 0; i < flowerNumber; i++) {
    setColorArray();
    setSize();
    // setCycle();
  }
  for (let i = 0; i < flowerNumber; i++) {
    setPos();
  }
}

// 描画
function draw() {
  noStroke();
  // 周期の刻み
  a += 0.04;
  if (a > 72) return;

  // 花の描画
  for (let i = 0; i < flowerNumber; i++) {
    fill(colorArray[i]);
    let rot = cos(cycle * a);
    // let rot = cos(cycleArray[i].num / cycleArray[i].den * a);
    if(rot < -0.63 || rot > 0.63) return;
    let r = sizeArray[i] * rot;
    let x = r * cos(a);
    let y = r * sin(a);
    // ドットのサイズ調整
    const dotSize = Math.floor(6 * r/rBold);
    // const dotSize = Math.floor(4 * sizeArray[i]/rMin);
    ellipse(posArray[i].x + x, posArray[i].y + y, dotSize, dotSize);
  }

}

// 色をセット
function setColorArray() {
  // colorArray.push(Math.floor(random(0, 20)));
  colorArray.push(0);
}

// 花のサイズをセット
function setSize() {
  sizeArray.push(Math.floor(random(rMin, rMax)));
}
// function setCycle() {
//   const number = Math.floor(random(5,8));
//   cycleArray.push({num: number, den: number + 1});
// }

// 位置をセット
function setPos() {

  // 初期セット
  xPos = Math.floor(random(0, h  - rMax));
  yPos = Math.floor(random(0, h  - rMax));

  // 位置の重複チェック
  sizeArray.forEach((r) => {
    let i = 0;
    do {
      xPos = Math.floor(random(0, h  - rMax));
      yPos = Math.floor(random(0, h  - rMax));

      i++;
      if (i > 100) {
        return;
      }
    } while (!check(xPos, yPos, r));
    // } while (!check(xPos, yPos, r) || yPos > (3 * h / 4));
    // } while (!check(xPos, yPos, r) || yPos < highGraph(xPos) || yPos > lowGraph(xPos));
    // } while (!check(xPos, yPos, r) || yPos < highGraph(xPos));

    posArray.push({x: xPos, y: yPos});
  })

}

// 重複チェック関数
function check(x, y, r) {
  let ok = true;

  posArray.forEach((pos, index) => {
    if (dist(x, y, pos.x, pos.y) < r + sizeArray[index]) {
      ok = false;
    }
  });

  return ok;
}