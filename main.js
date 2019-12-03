const source = document.createElement('canvas')
function assignAttributes(element, attributes) {
	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))
}
assignAttributes(source, {
  id: 'source',
	height: window.innerHeight - 30,
	width: window.innerWidth - 10
})
document.body.appendChild(source)
const context = source.getContext('2d', {alpha: 'false'})

function drawBackground() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < 12; i++){
    if ((i % 2) === 0){
      context.fillStyle = 'black';
    }
    else if ((i % 2) !== 0){
      context.fillStyle = 'peru';
    }
    context.fillRect(0, (window.innerHeight / 12) * i, window.innerWidth, window.innerHeight);
  }
  water.Draw();
}
function isOnLog () {
  let topOfObject = frog.origin[1];
  let bottomOfObject = frog.origin[1] + frog.dimensions[1];
  let leftSideOfObject = frog.origin[0];
  let rightSideOfObject = frog.origin[0] + frog.dimensions[0];
  logRow1.forEach(log => {
    let logLeft = log.origin[0];
    let logRight = log.origin[0] + log.dimensions[0];
    let logTop = log.origin[1];
    let logBot = log.origin[1] + log.dimensions[1];
    if ((topOfObject > logTop) && (bottomOfObject < logBot)) {
      if ((leftSideOfObject > logLeft) && (rightSideOfObject < logRight)) {
        if (!frog.CheckBorderX()) {
          frog.attachedSpeed += log.speed;
        }
      }
    }
  })
  logRow2.forEach(log => {
    let logLeft = log.origin[0];
    let logRight = log.origin[0] + log.dimensions[0];
    let logTop = log.origin[1];
    let logBot = log.origin[1] + log.dimensions[1];
    if ((topOfObject > logTop) && (bottomOfObject < logBot)) {
      if ((leftSideOfObject > logLeft) && (rightSideOfObject < logRight)) {
        if (!frog.CheckBorderX()) {
          frog.attachedSpeed += log.speed;
        }
      }
    }
  })
  logRow3.forEach(log => {
    let logLeft = log.origin[0];
    let logRight = log.origin[0] + log.dimensions[0];
    let logTop = log.origin[1];
    let logBot = log.origin[1] + log.dimensions[1];
    if ((topOfObject > logTop) && (bottomOfObject < logBot)) {
      if ((leftSideOfObject > logLeft) && (rightSideOfObject < logRight)) {
        if (!frog.CheckBorderX()) {
          frog.attachedSpeed += log.speed;
        }
      }
    }
  })
}


function drawObjects () {
    drawBackground();
    logRow1.forEach(wood =>{
      wood.Animate();
    });
    logRow2.forEach(wood =>{wood.Animate();});
    logRow3.forEach(wood =>{
      wood.Animate();
    });
    turtleRow1.forEach(turtle =>{
      turtle.Animate();
    });
    turtleRow2.forEach(turtle =>{
      turtle.Animate();
    });
    frog.Draw();
    frog.Move();
}
function gameLoop() {
    drawObjects();
    isOnLog();
    window.requestAnimationFrame(gameLoop);
}
gameLoop();