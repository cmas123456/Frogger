const source = document.createElement('canvas')
function assignAttributes(element, attributes) {
	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))
}
assignAttributes(source, {
  id: 'source',
	height: window.innerHeight - 20,
	width: window.innerWidth - 50
})
var globalId;
document.body.appendChild(source)
const context = source.getContext('2d', {alpha: 'false'})

function drawBackground() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = 'black';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
// water
    water.Draw();

    context.fillStyle = 'brown';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight * .1);
  }

function drawObjects () {
    drawBackground();
    wood.Animate();
    frog.Draw();
    frog.Move();
}
function gameLoop() {
    drawObjects();
    window.requestAnimationFrame(gameLoop);
}
gameLoop();
// let gameLoop = (() => {
//     const gameLoop = setInterval(() => {
//         drawObjects();
//     },1000/60)
//   })()
