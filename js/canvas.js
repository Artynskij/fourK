const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1500;
canvas.height = 1500;



let bezierLineOne = [350, 250, 100, 300, 450, 0]
let bezierLineTwo = [150, 100, 300, 300, 400, 0]


let offset = 0;
let lineDashOne = [30, 15], offsetLength = lineDashOne.reduce((a,c) => a + c) - 1;

let lineDashTwo = [1, 0]

let test = false
setInterval(() => {
    test = !test
}, 2000)
animation({
  clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  },
  update() {
    if (++offset > offsetLength) offset = 0;  
  },
  render() {
    createLineOne(bezierLineOne, lineDashOne);
    createLineTwo(bezierLineTwo, lineDashTwo);
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
    const fps = 1000 / diff
    const secondPart = diff / 1000
    const params = {
        timesTamp,
        pTimesTamp,
        diff,
        fps,
        secondPart
    }
    
    update(params)
    clear()
    render(params)
  }
}

function createLineOne(bezierCoordinates ,lineDash) {
  context.beginPath();
  context.moveTo(0, 350);
  context.bezierCurveTo(...bezierCoordinates);
  context.setLineDash(lineDash);
  context.lineDashOffset = -offset;
  context.strokeStyle = "#E20613";
  context.lineWidth = 3;
  context.stroke();
}
function createLineTwo(bezierCoordinates, lineDashTwo) {
  context.beginPath();

  context.moveTo(0, 400);

  context.setLineDash(lineDashTwo);
  context.bezierCurveTo(...bezierCoordinates);

  context.strokeStyle = "#194F9C";
  context.lineWidth = 3;
  context.stroke();
}
