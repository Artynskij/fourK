const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1500;
canvas.height = 1500;



let bezierLineOne = [350, 250, 100, 300, 450, 0]
let bezierLineTwo = [150, 100, 300, 300, 400, 0]

let lineDashOne = [20, 15]

let lineDashTwo = [20, 2]

let test = false
setInterval(() => {
    test = !test
}, 2000)
animation({
  clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  },
  update() {
    
    if(test) {
        lineDashOne[0] = lineDashOne[0] +.03 
        lineDashTwo[0] = lineDashTwo[0] + .01
        lineDashOne[1] = lineDashOne[1] +.03 
        lineDashTwo[1] = lineDashTwo[1] + .01

        // bezierLineOne[0] = bezierLineOne[0]+.2
        // bezierLineOne[1] = bezierLineOne[1]+.2
        // bezierLineOne[2] = bezierLineOne[2]+.2
        // bezierLineOne[3] = bezierLineOne[3]+.2
        // bezierLineOne[4] = bezierLineOne[4]-.1
        // bezierLineOne[5] = bezierLineOne[5]
        
        // bezierLineTwo[0] = bezierLineTwo[0]-.2
        // bezierLineTwo[1] = bezierLineTwo[1]-.2
        // bezierLineTwo[2] = bezierLineTwo[2]-.2
        // bezierLineTwo[3] = bezierLineTwo[3]-.2
        // bezierLineTwo[4] = bezierLineTwo[4]+.1
        // bezierLineTwo[5] = bezierLineTwo[5]
        // newTwo = bezierLineOne
        console.log("if");
    } else {
        lineDashOne[0] = lineDashOne[0] -.03 
        lineDashTwo[0] = lineDashTwo[0] - .01
        lineDashOne[1] = lineDashOne[1] -.03 
        lineDashTwo[1] = lineDashTwo[1] - .01
        
        // bezierLineOne[0] = bezierLineOne[0]-.2
        // bezierLineOne[1] = bezierLineOne[1]-.2
        // bezierLineOne[2] = bezierLineOne[2]-.2
        // bezierLineOne[3] = bezierLineOne[3]-.2
        // bezierLineOne[4] = bezierLineOne[4]+.1
        // bezierLineOne[5] = bezierLineOne[5]-1
        
        // bezierLineTwo[0] = bezierLineTwo[0]+.2
        // bezierLineTwo[1] = bezierLineTwo[1]+.2
        // bezierLineTwo[2] = bezierLineTwo[2]+.2
        // bezierLineTwo[3] = bezierLineTwo[3]+.2
        // bezierLineTwo[4] = bezierLineTwo[4]-.1
        // bezierLineTwo[5] = bezierLineTwo[5]+1
        console.log("else");
    }
    // if(bezierLineTwo[0] > 400) {

    //     test = true
    // } else if (bezierLineTwo[0] < 400) {
    //     test = false
    // }
    
    
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
  context.strokeStyle = "#E20613";
  context.lineWidth = 4;
  context.stroke();
}
function createLineTwo(bezierCoordinates, lineDashTwo) {
  context.beginPath();

  context.moveTo(0, 400);

  context.setLineDash(lineDashTwo);
  context.bezierCurveTo(...bezierCoordinates);

  context.strokeStyle = "#194F9C";
  context.lineWidth = 4;
  context.stroke();
}
