const source = document.createElement('canvas') //creates the canvas
function assignAttributes(element, attributes) {
	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))
}
assignAttributes(source, { // this makes the canvas fit in the window
  id: 'source',
	height: window.innerHeight - 20,
	width: window.innerWidth - 10
})
document.body.appendChild(source) // adds the canvas to the webpage
const context = source.getContext('2d', {alpha: 'false'})


function roadLines(){
  context.strokeStyle = 'yellow';
  for(let i = 7; i < 12; i++){
    context.beginPath();
    context.setLineDash([window.innerWidth/48,window.innerWidth/48]);
    context.moveTo(0, (window.innerHeight / 12) *i);
    context.lineTo(window.innerWidth, (window.innerHeight / 12) *i);
    context.stroke();
  }
}
function drawBackground() {// draws the background on the canvas
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < 12; i++){
    if ((i % 2) === 0){
      context.fillStyle = 'darkslategrey';
    }
    else if ((i % 2) !== 0){
      context.fillStyle = 'dimgray';
    }
    context.fillRect(0, (window.innerHeight / 12) * i, window.innerWidth, window.innerHeight);
  }
  roadLines();
  water.Draw();
}
function drawBay() {
  bayArea.forEach(bay => {
    bay.Draw();
  })
}
function isGameOver() {
  if (frog.lives <= 0) {
    context.rect(0, 0, window.innerWidth, window.innerHeight);
      context.fillStyle = "rgba(0,0,0,0.5)";
      context.fill();
      context.font = "30px Helvetica";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("GAME OVER", window.innerWidth / 2, window.innerHeight / 2);
  }
  else {
    let counter = 0;
    for (let i = 0; i < bayArea.length; i++){
      if (!bayArea[i].isSafe){
        counter++;
      }
      if (counter === bayArea.length) {
        context.rect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = "rgba(0,0,0,0.5)";
        context.fill();

        context.font = "30px Helvetica";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText("VICTORY", window.innerWidth / 2, window.innerHeight / 2);
      }
    }
  }
}
function isOnLog () {
  let topOfObject = frog.origin[1];
  let bottomOfObject = frog.origin[1] + frog.dimensions[1];
  let leftSideOfObject = frog.origin[0];
  let rightSideOfObject = frog.origin[0] + frog.dimensions[0];
  logCollection.forEach(row => {
    row.forEach(log => {
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
  })
}
let bayArea = [];
let createBays = (() => {
  for (let i = 1; i < 6; i ++){
      bay = {
          origin: [window.innerWidth * (.18 * i) - (window.innerWidth * .12), 0],
          dimensions: [window.innerWidth * .15, window.innerHeight / 12],
          isSafe: true,
          image: img_bay,
          Draw () {
            if (this.isSafe){
              this.image = img_bay;
            } else {
              this.image = img_businessfrog;
            }
            context.drawImage(this.image, this.origin[0], this.origin[1], this.dimensions[0], this.dimensions[1]);
          }
      }
      bayArea.push(bay);
  }
})();
function bayLanding() {
  let leftSideOfObject = frog.origin[0];
  let rightSideOfObject = frog.origin[0] + frog.dimensions[0];
  let frogLane = frog.origin[1];
  bayArea.forEach(bay => {
    let bayLeft = bay.origin[0];
    let bayRight = bay.origin[0] + bay.dimensions[0];
    let bayLane = bay.origin[1] + bay.dimensions[1];
    if (frogLane <= bayLane) {
      if (leftSideOfObject >= bayLeft && leftSideOfObject <= bayRight){
        if (bay.isSafe) {
          frog.origin[0] = window.innerWidth / 2;
          frog.origin[1] = window.innerHeight * .935;
          bay.isSafe = false;
        } 
        else if (!bay.isSafe) {
          frog.lives--;
          frog.origin[0] = window.innerWidth / 2;
          frog.origin[1] = window.innerHeight * .935;
        }
      }
      else if (rightSideOfObject <= bayLeft && rightSideOfObject >= bayRight){
        if (bay.isSafe) {
          frog.origin[0] = window.innerWidth / 2;
          frog.origin[1] = window.innerHeight * .935;
          bay.isSafe = false;
        } 
        else if (!bay.isSafe) {
          frog.lives--;
          frog.origin[0] = window.innerWidth / 2;
          frog.origin[1] = window.innerHeight * .935;
        }
      } 
    }
  })
}
function goSplat() {
  let topOfObject = frog.origin[1];
  let leftSideOfObject = frog.origin[0];
  let rightSideOfObject = frog.origin[0] + frog.dimensions[0];
  road.forEach(lane => {
    lane.forEach(car => {
      let carLeft = car.x;
      let carRight = car.x + car.w;
      let carAxis = car.y;
      if (carAxis === topOfObject){
        if (leftSideOfObject >= carLeft && leftSideOfObject <= carRight){
          frogSplatted();
          frog.lives--;
          frog.origin[0] = window.innerWidth / 2;
          frog.origin[1] = window.innerHeight * .935;
        }
        else if(rightSideOfObject <= carLeft && rightSideOfObject >= carRight){
          frogSplatted();
          frog.lives--;
          frog.origin[0] = window.innerWidth / 2;
          frog.origin[1] = window.innerHeight * .935;
        }
      }
    })
  })
}
function whysoDrown(){
  if ((frog.origin[1] <= water.origin[1] + water.dimensions[1]) && (frog.origin[1] > water.origin[1])){
    if (frog.attachedSpeed === 0) {
      frogDrown();
      frog.lives--;
      frog.origin[0] = window.innerWidth / 2;
      frog.origin[1] = frog.origin[1] = window.innerHeight * .935;
    }
  }
}
function isOnTurtle() {
  let topOfObject = frog.origin[1];
  let bottomOfObject = frog.origin[1] + frog.dimensions[1];
  let leftSideOfObject = frog.origin[0];
  let rightSideOfObject = frog.origin[0] + frog.dimensions[0];
  turtleNest.forEach(nest => {
    nest.forEach(turtle => {
      let turtleLeft = (turtle.origin[0] - turtle.radius);
      let turtleRight = (turtle.origin[0] - turtle.radius) + (turtle.radius * turtle.turtPop * 2);
      let turtleTop = (turtle.origin[1] - turtle.radius);
      let turtleBot = (turtle.origin[1] + turtle.radius);
      if ((topOfObject > turtleTop) && (bottomOfObject < turtleBot)) {
        if ((leftSideOfObject > turtleLeft) && (rightSideOfObject < turtleRight)) {
          if (turtle.safe){
            if (!frog.CheckBorderX()) {
              frog.attachedSpeed -= turtle.speed;
            }
          }
          if (!turtle.safe){
            frogTurtled();
            frog.lives--;
            frog.origin[0] = window.innerWidth / 2;
            frog.origin[1] = window.innerHeight * .935;
          }
        }
      }
    })
  })
}
function drawObjects () {
    drawBackground();
    drawBay();
    drawSplat();
    logCollection.forEach(row =>{
      row.forEach(wood =>{
        wood.Animate();})
    });
    turtleNest.forEach(nest => {
      nest.forEach(turtle =>{
        turtle.Animate();})
    });
    bayLanding();
    frog.Draw();
    frog.Move();
}
function gameLoop() {
    drawObjects();
    goZoom();
    goSplat();
    isOnLog();
    isOnTurtle();
    whysoDrown();
    isGameOver();
    window.requestAnimationFrame(gameLoop);
}
gameLoop();