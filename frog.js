let frog = {};
let frogCreate = (() => {
    frog = {
        origin: [window.innerWidth / 2, window.innerHeight / 2],
        dimensions: [40,20],
        color: 'green',
        lives: 5,
        image: null,
        movementSpeed: 10,
        horizontalSpeed: 0,
        verticalSpeed: 0,
        canHop: true,
        hopCounter: 0,
        Draw() {
            context.fillStyle = this.color;
            context.fillRect(this.origin[0],this.origin[1],this.dimensions[0],this.dimensions[1]);
        },
        Move() {
            this.origin[0] += this.horizontalSpeed;
            this.origin[1] += this.verticalSpeed;
        }
        
    }
})();
let InputHandler = (() => {
    document.addEventListener("keydown", event => {
      switch (event.key) {
          case "ArrowLeft":
              frog.horizontalSpeed = -frog.movementSpeed;
              break;
          case "ArrowRight":
              frog.horizontalSpeed = frog.movementSpeed;
              break;
          case "ArrowDown":
              frog.verticalSpeed = frog.movementSpeed;
              break;
          case "ArrowUp":
              frog.verticalSpeed = -frog.movementSpeed;
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