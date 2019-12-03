const frogImageUp = document.getElementById('img_frogup');
const frogImageDown = document.getElementById('img_frogdown');
const frogImageLeft = document.getElementById('img_frogleft');
const frogImageRight = document.getElementById('img_frogright');
let frog = {};
let frogCreate = (() => {
    frog = {
        origin: [window.innerWidth / 2, window.innerHeight * (92/100)],
        dimensions: [40,30],
        color: 'green',
        lives: 5,
        image: null,
        movementSpeed: window.innerHeight * (7/100) ,
        horizontalSpeed: 0,
        verticalSpeed: 0,
        canHop: true,
        hopCounter: 0,
        image: frogImageUp,
        Draw() {
            context.drawImage(this.image, this.origin[0],this.origin[1],this.dimensions[0],this.dimensions[1]);
        },
        Move() {
            if (this.hopCounter >= 10){
                if (this.horizontalSpeed !== 0 || this.verticalSpeed !== 0) {
                    this.origin[0] += this.horizontalSpeed;
                    this.origin[1] += this.verticalSpeed;
                    this.hopCounter = 0;
                }
            } else
                this.hopCounter++;
            }
        }
})();
let InputHandler = (() => {
    document.addEventListener("keydown", event => {
      switch (event.key) {
          case "ArrowLeft":
              frog.horizontalSpeed = -frog.movementSpeed;
              frog.image = frogImageLeft;
              break;
          case "ArrowRight":
              frog.horizontalSpeed = frog.movementSpeed;
              frog.image = frogImageRight;
              break;
          case "ArrowDown":
              frog.verticalSpeed = frog.movementSpeed;
              frog.image = frogImageDown;
              break;
          case "ArrowUp":
              frog.verticalSpeed = -frog.movementSpeed;
              frog.image = frogImageUp;
              break;
            }
    })
    document.addEventListener("keyup", event => {
      switch (event.key) {
          case "ArrowLeft":
              frog.horizontalSpeed = 0;
              break;
          case "ArrowRight":
              frog.horizontalSpeed = 0;
              break;
          case "ArrowDown":
              frog.verticalSpeed = 0;
              break;
          case "ArrowUp":
              frog.verticalSpeed = 0;
              break;    
      }
    })
  })();