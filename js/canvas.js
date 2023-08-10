const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1500;
canvas.height = 1500;

let bezierLineOne = [350, 250, 100, 300, 450, 0];

let offset = 10;
let lineDashOne = [30, 15],
  offsetLength = lineDashOne.reduce((a, c) => a + c) - 1;
let gradientOne = 20;
let gradientTwo = 50;

// const coord = {
//   one: 0,
//   two: 400,
// };



// let test = false;
// setInterval(() => {
//   test = !test;
// }, 2000);
animation({
  clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  },
  update() {
    
    if (++offset > offsetLength) offset = 0;
    
  
    gradientOne > 500 ? gradientOne = 0 : gradientOne+=3
    gradientTwo > 500 ? gradientTwo = 0 : gradientTwo+=3
    
  },
  render() {
    createLineOne(bezierLineOne, lineDashOne);
    createLineTwo();
    
  },
});

function animation(obj) {
  const { clear, update, render } = obj;

  let pTimesTamp = 0;

  requestAnimationFrame(tick);

  function tick(timesTamp) {
    requestAnimationFrame(tick);

    const diff = timesTamp - pTimesTamp;
    pTimesTamp = timesTamp;
    const fps = 1000 / diff;
    const secondPart = diff / 1000;
    const params = {
      timesTamp,
      pTimesTamp,
      diff,
      fps,
      secondPart,
    };

    update(params);
    clear();
    render(params);
  }
}

function createLineOne(bezierCoordinates, lineDash) {
  context.beginPath();
  context.moveTo(0, 350);
  context.bezierCurveTo(...bezierCoordinates);
  context.setLineDash(lineDash);
  context.lineDashOffset = -offset;
  context.strokeStyle = "#E20613";
  context.lineWidth = 3;
  context.stroke();
}
function createLineTwo() {
  context.beginPath();
  let gradient = context.createLinearGradient(gradientOne, 0, gradientTwo, 0);
  gradient.addColorStop(0, "#4e8ed3");
  gradient.addColorStop(1, "#206fc5");
  context.moveTo(0, 400);
  context.lineDashOffset = -offset;
  // context.drawImage(pic, 10, 10, 100, 100); // выводим картинку по координатам (pic, x, 0)
  context.setLineDash([0, 0]);
  context.bezierCurveTo(150, 100, 300, 300, 400, 0);
 
  context.strokeStyle = gradient;

  context.lineWidth = 3;
  context.stroke();
}
