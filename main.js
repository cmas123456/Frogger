const source = document.createElement('canvas')
function assignAttributes(element, attributes) {
	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))
}
assignAttributes(source, {
  id: 'source',
	height: window.innerHeight - 30,
	width: window.innerWidth - 10
})
var globalId;
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
    window.requestAnimationFrame(gameLoop);
}
gameLoop();

