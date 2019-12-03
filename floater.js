let water = {};
let waterCreate = (() => {
    water = {
        origin: [0, window.innerHeight * .10],
        dimensions: [window.innerWidth, window.innerHeight * .40],
        color: 'blue',
        image: null,
        safe: false,
        Draw() {
            context.fillStyle = this.color;
            context.fillRect(this.origin[0],this.origin[1],this.dimensions[0],this.dimensions[1]);
        },
    }
})();
let wood = {};
let woodCreate = ((start = 0, length = .10) => {
    wood = {
        origin: [0 + start, window.innerHeight * .11],
        dimensions: [window.innerWidth * length, window.innerHeight * .03],
        speed: 2,
        color: 'peru',
        image: null,
        safe: true,
        Draw() {
            context.fillStyle = this.color;
            context.fillRect(this.origin[0],this.origin[1],this.dimensions[0],this.dimensions[1]);
        },
        Animate(){
            this.origin[0] += this.speed;
            this.Draw();
            if (this.origin[0] > window.innerWidth){
                this.origin[0] = -this.dimensions[0];
            }
        }
    }
})();
// let logRow = ((rowNum) =>{
//     switch(rowNum){
//         case 1:
//             wood.woodCreate(window.innerWidth *.5, .2).Animate();
//             break;
//         case 2: 
//             // make log in row 2two
//             break;
//         case 3:
//             //make log in row three
//             break;
//         default:
//             console.log("You done f... messed up log generation.")
//     }
// })();