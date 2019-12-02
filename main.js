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

context.fillStyle = 'blue';
context.fillRect =(water.origin[0],water.origin[1],water.dimensions[0], water.dimensions[1]);
context.fillStyle = 'green';
context.fillRect(frog.origin[0],frog.origin[1],frog.dimensions[0],frog.dimensions[1]);