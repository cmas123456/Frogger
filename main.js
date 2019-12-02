const source = document.createElement('canvas')
function assignAttributes(element, attributes) {
	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))
}
assignAttributes(source, {
  id: 'source',
	height: window.innerHeight - 20,
	width: window.innerWidth - 50
})
document.body.appendChild(source)
const context = source.getContext('2d', {alpha: 'false'})

function drawBackground() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = 'black';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    context.fillStyle = 'blue';
    context.fillRect(water.origin[0],water.origin[1],water.dimensions[0],water.dimensions[1]);
    
    context.fillStyle = 'brown';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight * .1);
  }

function drawObjects () {
    drawBackground();
    frog.Draw();
    frog.Move();

}
context.fillStyle = 'green';
context.fillRect(frog.origin[0],frog.origin[1],frog.dimensions[0],frog.dimensions[1]);

let gameLoop = (() => {
    const gameLoop = setInterval(() => {
        drawObjects();
    },1000/60)
  })()