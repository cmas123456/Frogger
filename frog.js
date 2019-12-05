const frogImageUp = document.getElementById('img_frogup');
const frogImageDown = document.getElementById('img_frogdown');
const frogImageLeft = document.getElementById('img_frogleft');
const frogImageRight = document.getElementById('img_frogright');
let frogSplat = [];
function drawSplat() {
    frogSplat.forEach(frog => {
        frog.Draw();
    })
}
function frogSplatted () {
    splatted = {
        origin: [frog.origin[0], frog.origin[1]],
        dimensions: [window.innerWidth / 25, window.innerHeight / 20],
        image: img_frogsplat,
        Draw() {
            context.drawImage(this.image, this.origin[0], this.origin[1],this.dimensions[0], this.dimensions[1]);
        }
    }
    frogSplat.push(splatted);
}
function frogDrown() {
    splatted = {
        origin: [frog.origin[0], frog.origin[1]],
        dimensions: [window.innerWidth / 40, window.innerHeight / 20],
        image: img_drowning,
        Draw() {
            context.drawImage(this.image, this.origin[0], this.origin[1],this.dimensions[0], this.dimensions[1]);
        }
    }
    frogSplat.push(splatted);
}
function frogTurtled() {
    splatted = {
        origin: [frog.origin[0], frog.origin[1]],
        dimensions: [window.innerWidth / 40, window.innerHeight / 20],
        image: img_turtles,
        Draw() {
            context.drawImage(this.image, this.origin[0], this.origin[1],this.dimensions[0] + window.innerWidth * .03, this.dimensions[1]);
        }
    }
    frogSplat.push(splatted);
}
let frog = {};
let frogCreate = (() => {
    frog = {
        origin: [window.innerWidth / 2, window.innerHeight * .935],
        dimensions: [window.innerWidth / 40, window.innerHeight / 20],
        color: 'green',
        lives: 5,
        image: null,
        movementSpeed: (window.innerHeight / 12),
        horizontalSpeed: 0,
        verticalSpeed: 0,
        attachedSpeed: 0,
        canHop: true,
        hopCounter: 0,
        isSafe: true,
        image: frogImageUp,
        Draw() {
            context.drawImage(this.image, this.origin[0],this.origin[1],this.dimensions[0],this.dimensions[1]);
        },
        Move() {
            if (this.hopCounter >= 10){
                if (this.horizontalSpeed !== 0 || this.verticalSpeed !== 0) {
                    if (!frog.CheckBorderX()){
                        this.origin[0] += this.horizontalSpeed;
                        this.hopCounter = 0;
                    } 
                    if (!frog.CheckBorderY()){
                        this.origin[1] += this.verticalSpeed;
                        this.hopCounter = 0;
                    }
                    // if (frog.attachedSpeed > 0){
                    //     frog.origin[0] += frog.attachedSpeed;
                    // } 
                }
            } else {
                this.hopCounter++; 
            }
            if (frog.attachedSpeed !== 0) {
                if (!frog.CheckBorderX()) {
                    frog.origin[0] += frog.attachedSpeed;
                    frog.attachedSpeed = 0;
                } else frog.origin[0] += 0;
            }    
        },
        CheckBorderX() {
            if (this.origin[0] + frog.dimensions[0] + this.horizontalSpeed < 0 || this.origin[0] + this.horizontalSpeed > window.innerWidth - 25){
                return true;
            }
            else {
                return false;
            }
        },
        CheckBorderY() {
            if (this.origin[1] + this.verticalSpeed < -10 || this.origin[1] + this.verticalSpeed > window.innerHeight - 25){
                return true;
            }
            else {
                return false;
            }
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